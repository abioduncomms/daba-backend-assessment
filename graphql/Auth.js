const { gql } = require('apollo-server-express')
const bcrypt = require('bcrypt')
const { v4: uuidv4 } = require('uuid')
const { GraphQLUpload } = require("graphql-upload")

const redis = require('../util/redisConnection')
const { Auth } = require("../model")
const { uploadImage } = require("../util/uploader")

const authTypes = gql`
    scalar Upload

    type AuthMutationResponse{
        message:String
        status:Boolean
    }

    input RegisterOrLoginInput{
        email:String!
        password:String!
    }

    type Profile{
        name:String
        bio:String
        phone:String
        email:String
        password:String
        photoUrl:String
    }

    input UpdateProfileInput{
        name:String!
        bio:String
        phone:String
        email:String!
        password:String!
    }


    type Query{
        getMyProfile:Profile
        logout:AuthMutationResponse
    }

    type Mutation{
        register(input:RegisterOrLoginInput):AuthMutationResponse
        updateProfile(input:UpdateProfileInput):AuthMutationResponse
        changePhoto(photo:Upload!):AuthMutationResponse
        login(input:RegisterOrLoginInput):AuthMutationResponse
    }


`

const authResolvers = {
    Upload: GraphQLUpload,
    Query:{

        getMyProfile:async(_,__,{user})=>{
            if(!user) return
            return await Auth.findOne({where:{id:user.id}})
        },

        logout:async(_,__,{res})=>{
            res.cookie('uuid', '', {
                httpOnly: true,
                maxAge: new Date(),
                sameSite:"None",
                secure:true
              });
        }

    },

    Mutation:{
       

        register:async(_,{input})=>{
            const salt = bcrypt.genSaltSync(10);
            input.password = bcrypt.hashSync(input.password, salt);
            const [auth,created] = await Auth.findOrCreate({where:{email:input.email}, defaults:input})
            if(created){
                return{
                    message:"Account has been created!",
                    status:true
                }
            }
            return{
                message:"Email already in use",
                status:false
            }
            
        },
        updateProfile:async(_,{input},{user})=>{
            if(input.password){
                const salt = bcrypt.genSaltSync(10);
                input.password = bcrypt.hashSync(input.password, salt);
            }
            const [auth] = await Auth.update(input,{where:{id:user?.id}})
            if(auth){
                return{
                    message:"Profile info updated",
                    status:true
                }
            }

            return{
                message:"An error occured",
                status:false
            }
        },
        changePhoto:async(_,{photo},{user})=>{
            const { createReadStream } = await photo
            const stream = createReadStream()
            const {secure_url} = await uploadImage(stream,"service")
            const photoUrl = secure_url
            const [updated] = await Auth.update({photoUrl}, {where:{id:user?.id}})
            if(updated){
                return{
                    message:"Profile photo updated",
                    status:true
                }
            }
        },
        login:async(_,{input},{res})=>{
            const auth = await Auth.findOne({where:{email:input.email}})
            if(auth){
               
                    const isTrue = bcrypt.compareSync(input.password, auth.password)
                    if(isTrue){
                        const uuid = auth.id+'_'+uuidv4()
                        redis.set(uuid,JSON.stringify(auth))
                        
                        res.cookie('uuid', uuid, {
                            httpOnly: true,
                            maxAge: 1000 * 60 * 60 * 24 * 31,
                            sameSite:"None",
                            secure:true
                          });

                        return{
                            message:"Authentication successful",
                            status:true,
                            auth
                        }
                    }
                    return{
                        message:"Invalid email and password combination",
                        return:false
                    }
               
            }
            return{
                message:"Invalid email and password combination",
                return:false
            }
            
            
        },

    }
}

module.exports = {authTypes, authResolvers}
require('dotenv').config()
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const cookieParser = require("cookie-parser")
const cors = require('cors')
const {typeDefs, resolvers} = require('./graphql/index')
const redis = require("./util/redisConnection")
const {graphqlUploadExpress} = require("graphql-upload")



const PORT = process.env.PORT || 5000



let allowedOrigins = [
  'https://localhost:3000',
  'https://studio.apollographql.com',
]

const startApolloServer = async()=>{

    const app = express();
    app.use(cors({origin:(origin, callback)=>{
      
      if(!origin) return callback(null, true)
      
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
        'allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },credentials:true}))

    app.use(express.json({limit:'1000MB'}))
    app.use(cookieParser())
    
    app.use(async(req,res,next)=>{
      const {uuid} = req.cookies || {}
      if(uuid){
        const user = await redis.get(uuid)
        req.user = user
      }

      next()
    })

    app.use(graphqlUploadExpress());

  
const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
    context:async({req,res})=>{
      let user 
      
      if(req.user) user = JSON.parse(req.user)

      return{req,res,user}
    }
  })
    
await server.start()

server.applyMiddleware({app,cors:false})

app.listen(PORT,()=>{
  console.log(`Auth Service running at http://localhost:${PORT}`)
})
  
}
  

startApolloServer()
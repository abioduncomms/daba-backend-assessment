import { gql } from "@apollo/client";


export const LOGIN = gql`
    mutation Login(
        $email:String!
        $password:String!
    ){
        login(input:{
            email:$email
            password:$password
        }){
            message
            status
        }
    }
`

export const REGISTER = gql`
    mutation Register(
        $email:String!
        $password:String!
    ){
        register(input:{
            email:$email
            password:$password
        }){
            message
            status
        }
    }
`

export const UPDATE_PROFILE = gql`
    mutation UpdateProfile(
        $name:String!
        $bio:String
        $phone:String
        $email:String!
        $password:String!
    ){
        updateProfile(input:{
            name:$name
            bio:$bio
            phone:$phone
            email:$email
            password:$password
        }){
            message
            status
            profile{
                name
                email
                phone
                bio
            }
        }
    }
`

export const CHANGE_PHOTO = gql`
    mutation ChangePhoto(
        $photo:Upload!
    ){
        changePhoto(photo:$photo){
            message
            status
        }
    }
`

export const GET_MY_PROFILE=gql`
    {
        getMyProfile{
            name
            email
            phone
            bio
            photoUrl
        }
    }
`

export const LOGOUT = gql`
    {
        logout{
            message
            status
        }
    }
`
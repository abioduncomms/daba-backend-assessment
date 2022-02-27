import { Input,Button } from "../../components/form";
import AuthLayout from '../../components/layout/Auth'
import {Mail, Lock} from '../../components/icons'
import { Formik, Form } from "formik";
import {LOGIN_REGISTER_FORM} from '../../validation/Auth'
import { useMutation } from "@apollo/client";
import {LOGIN} from '../../graphql/Auth'
import { toast } from "react-toastify";
import Router from "next/router";

const LoginForm = ()=>{

    const [login,{loading}]= useMutation(LOGIN,{
        onCompleted({login:{message,status}}){
            if(status){
                toast.success(message)
                Router.replace("/account")
            }else{
                toast.error(message)
            }
        }
    })


    return(
        <>

         <AuthLayout
            title="Login"
            ctaText="Don’t have an account yet?"
            label="Register"
            target="/register">
                <Formik
                    initialValues={{email:"",password:""}}
                    validationSchema={LOGIN_REGISTER_FORM}
                    onSubmit={(input)=>login({variables:input})}>
                        {({values,errors,setFieldValue, handleSubmit})=>(
                    <Form>
                <Input 
                    onChange={(e)=>setFieldValue("email",e)}
                    value={values?.email}
                    type="email" 
                    icon={Mail}
                    name="email"
                    error={errors.email} 
                    placeholder="Email"/>
                <Input 
                    onChange={(e)=>setFieldValue("password",e)} 
                    value={values?.password}
                    type="password"
                    name="password" 
                    icon={Lock}
                    error={errors.password}
                    placeholder="Password"/>
                <Button 
                    type="primary" 
                    block
                    loading={loading} 
                    style={{marginTop:22}} onClick={handleSubmit}>Login</Button>
                    </Form>
                )}</Formik>
             
         </AuthLayout>
        </>
    )
}

export default LoginForm
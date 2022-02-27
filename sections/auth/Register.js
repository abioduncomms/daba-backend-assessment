import { Input,Button } from "../../components/form";
import AuthLayout from '../../components/layout/Auth'
import {Mail, Lock} from '../../components/icons'
import { LOGIN_REGISTER_FORM } from "../../validation/Auth";
import { REGISTER } from "../../graphql/Auth";
import { useMutation } from "@apollo/client";
import { Formik,Form } from "formik";
import { toast } from "react-toastify";
import Router from "next/router";

const RegisterForm = ()=>{

    const [register,{loading}]= useMutation(REGISTER,{
        onCompleted({register:{message,status}}){
            if(status){
                toast.success(message)
                Router.push("/")
            }else{
                toast.error(message)
            }
        }
    })


    return(
        <>

         <AuthLayout
            title="Join thousands of learners from around the world "
            subText="Master web development by making real-life projects. There are multiple paths for you to choose"
            ctaText="Already a member?"
            label="Login"
            target="/">
                <Formik
                    initialValues={{email:"",password:""}}
                    validationSchema={LOGIN_REGISTER_FORM}
                    onSubmit={(input)=>register({variables:input})}>
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
                    style={{marginTop:22}} onClick={handleSubmit}>Start coding now</Button>
                    </Form>
                )}</Formik>
            
         </AuthLayout>
        </>
    )
}

export default RegisterForm
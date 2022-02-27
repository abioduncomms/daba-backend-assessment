import Link from "next/link"
import {ArrowLeft,Camera} from '../../components/icons'
import {Button, Input,Textarea} from '../../components/form'
import { useSelector, useDispatch } from "react-redux"
import { addMe } from "../../redux/reducer/auth"
import { Formik,Form } from "formik"
import { UPDATE_PROFILE, CHANGE_PHOTO } from "../../graphql/Auth"
import { useMutation } from "@apollo/client"
import { toast } from "react-toastify"
import { useState } from "react"
import { UPDATE_FORM } from '../../validation/Auth'



const Edit = ()=>{

    const {name,email,phone,photoUrl,bio} = useSelector(state=>state?.profile?.me) ||{}
    const dispatch = useDispatch()

    const [updateProfile,{loading}] = useMutation(UPDATE_PROFILE,{
        onCompleted({updateProfile:{message,status,profile}}){
            if(status){
                toast.success(message)
                dispatch(addMe(profile))
            }else{
                toast.error(message)
            }
        }
    })

    return(
        <>
        <div>
        <div id="cta-wrap">
         <Link href="/account"><a><ArrowLeft /> Back</a></Link>
       </div>
        <div className="frame">
            <div className="top">
                <h4>Change Info</h4>
                <p>Changes will be reflected to every services</p>
            </div>
            <div className="form-wrapper">
                <Avatar />
                <Formik
                    validationSchema={UPDATE_FORM}
                    enableReinitialize 
                    initialValues={{name,email,phone,photoUrl,bio}}
                    onSubmit={(input)=>updateProfile({variables:input})}>
                        {({values,setFieldValue,errors,handleSubmit})=>(
                    <Form>
                <Input 
                    type="text" 
                    label="Name"
                    value={values.name}
                    error={errors.name}
                    onChange={(e)=>setFieldValue("name",e)} 
                    placeholder="Enter your name..."/>
                <Textarea label="Bio"
                    value={values.bio}
                    error={errors.bio}
                    onChange={(e)=>setFieldValue("bio",e)} />
                <Input 
                    type="tel" 
                    label="Phone" 
                    placeholder="Enter your phone..."
                    value={values.phone}
                    error={errors.phone}
                    onChange={(e)=>setFieldValue("phone",e)} />
                <Input 
                    type="email" 
                    label="Email" 
                    placeholder="Enter your email..."
                    value={values.email}
                    error={errors.email}
                    onChange={(e)=>setFieldValue("email",e)} />
                <Input 
                    value={values.password}
                    error={errors.password}
                    onChange={(e)=>setFieldValue("password",e)} 
                    type="password" label="Password" placeholder="Enter your password..."/>
                <Button 
                    type="primary" 
                    style={{marginTop:20}}
                    loading={loading}
                    onClick={handleSubmit}>Save</Button>
                    </Form>
                )}</Formik>
               
            </div>
         
        </div>
        <div className="footer">
            <p>created by abiodun-michael</p>
            <p>devChallenges.io</p>
        </div>
        </div>
        <style jsx>{`
            .page-top{
                text-align:center;
                margin-top:20px;
            }

            .page-top h3{
                font-size:36px;
                font-weight:400;
                color:#000000;
                line-height:49px;
            }

            .page-top p{
                color:#000000;
                font-size:18px;
                font-weight:300;
                line-height:25px;
            }

            .frame{
                border: 1px solid #E0E0E0;
                border-radius: 12px;
                width: 846px;
                min-height: 500px;
                margin-top:15px;
                padding:30px 48px;
            }

          
            .footer{
                width: 846px;
                display:flex;
                justify-content:space-between;
                margin-bottom:10px;
            }

            .footer p{
                color:#828282;
                font-size:14px;
                line-height:19px;
            }

            .frame .top h4{
                font-size:24px;
                font-weight:400;
            }

            .frame .top p{
                color:#828282;
                font-size:13px;
                font-weight:500;
            }

            .form-wrapper{
                width:400px;
            }

            #cta-wrap a {
                display:flex;
                gap:5;
            }

            @media (max-width: 767.98px){
                #cta-wrap{
                    padding-left:15px;
                }
                .frame{
                    border:none;
                    width:100%;
                    padding:30px 22px;
                }

                .form-wrapper{
                    width:100%;
                }
  
                #txt{
                    width:200px;
                }
  
  
                .footer{
                    width:100%;
                    padding:0 22px;
                }
  
  
               .photo{
                   position:absolute;
                   right:22px;
               }
  
                .page-top h3{
                    font-size:24px;
                    line-height: 33px;
                }
  
                .page-top p{
                    font-size:14px;
                    line-height: 19px;
                }
  
                .frame .item p:nth-child(2){
                    text-align:right;
                }
  
               
              }
        
        `}</style>
        </>
    )
}

export default Edit


const Avatar = ()=>{

    const [file, setFile] = useState("")
    const [selectedFile, setSelectedFile] = useState(null)

    const profile = useSelector(state=>state?.profile?.me) ||{}
    const dispatch = useDispatch()

    const handleFile = (e)=>{
        const input = e.target.files[0]
        setSelectedFile(input)
        const img = URL.createObjectURL(input)
        
        setFile(img)

    }

    const [changePhoto,{loading}] = useMutation(CHANGE_PHOTO,{ 
        variables:{photo:selectedFile},
        onCompleted({changePhoto:{message,status}}){
            if(status){
                toast.success(message)
                setSelectedFile("")
                setFile("")
                dispatch(addMe({...profile,photoUrl:file}))
            }else{
                toast.error(message)
            }
        }
    })

    return(
        <>
        <div className="avt-wrap">
            <label className="img">
                {
                    file ? 
                    <img src={file || "/img/avatar.png"}/>:
                    <img src={profile?.photoUrl || "/img/avatar.png"}/>
                }
                
                <input type="file" onChange={handleFile}/>
                <div className="overlay"><span className="cam"><Camera /></span></div>
            </label>
            {
                loading && selectedFile ? <p className="cta">Uploading...</p>:
                !loading && selectedFile ?
                <p className="cta" onClick={changePhoto}>CHANGE PHOTO</p>:null
            }
            
        </div>
            <style jsx>{`
                .avt-wrap{
                    margin:25px 0;
                    display:flex;
                    align-items:center;
                    gap:27px;
                }
                .img{
                    display:flex;
                    height:72px;
                    width:72px;
                    border-radius:8px;
                    position:relative;
                }

                .img img{
                    height:100%;
                    width:100%;
                    object-fit:cover;
                    border-radius:8px;
                }

                .img input[type=file]{
                    display:none;
                }

                .overlay{
                    position:absolute;
                    top:0;
                    bottom:0;
                    right:0;
                    left:0;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    border-radius:8px;
                    cursor:pointer;
                }

                .overlay .cam{
                    display:none;
                }

                .cta{
                    color:#828282;
                    font-size:13px;
                    font-weight:500;
                    line-height: 18px;
                    letter-spacing: -0.035em;
                    cursor:pointer;
                }

                .overlay:hover{
                    background:rgba(0, 0, 0, 0.2);
                }

                .overlay:hover .cam{
                    display:inline-block;
                }

                
            `}</style>
        </>
    )
}
import { Logo } from "../icons"
import Link from "next/link"

const AuthLayout = ({title,subText,ctaText,target="#",label,children})=>{


    return(
        <>
            <div className="outer-wrapper">
                <div className="container">
                    <Logo style={{marginBottom:24}}/>
                    <h3>{title}</h3>
                    <p>{subText}</p>
                    {children}
                    <p className="txt">{ctaText} <Link href={target}><a>{label}</a></Link></p>
                </div>
                <div className="footer">
                    <p>created by abiodun-michael</p>
                    <p>devChallenges.io</p>
                </div>
            </div>
           

            <style jsx>{`
                .container{
                    border:1px solid #BDBDBD;
                    border-radius:24px;
                    padding:50px;
                    width:450px;
                    
                }

                .container h3{
                    font-size:18px;
                    line-height:25px;
                    font-weight:600;
                    color:#333333;
                }

                .container p{
                    font-size:16px;
                    line-height:22px;
                    margin-top:13px;
                    color:#333333;
                    margin-bottom:34px;
                }

                .outer-wrapper{
                    position:fixed;
                    top:0;
                    left:0;
                    right:0;
                    bottom:0;
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    flex-direction:column;
                    background-color:#ffffff;
                }

                .footer{
                    width:450px;
                    display:flex;
                    justify-content:space-between;
                    font-size:14px;
                    color: #828282;

                }

                .txt{
                    text-align:center;
                    margin-top:30px!important;
                    color: #828282;
                }

                @media (max-width: 767.98px) {
                    .container{
                        border:none;
                        width:100%;
                        padding:20px;
                    }

                    .footer{
                        width:100%;
                        padding:0 20px;
                        position:fixed;
                        bottom:17px;
                    }

                    .outer-wrapper{
                        display:block;
                        background:#FAFAFB;
                       
                        
                    }
                }

            
            `}</style>
        </>
    )
}

export default AuthLayout
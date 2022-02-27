import Link from "next/link"
import { useSelector } from "react-redux"


const Profile = ()=>{

    const {name,email,phone,photoUrl,bio} = useSelector(state=>state?.profile?.me) ||{}

   

    return(
        <>
        <div className="page-top">
            <h3>Personal Info</h3>
            <p>Basic info, like your name and photo</p>
        </div>
        <div className="frame">
            <div className="frame-top">
                <div id="txt">
                    <h4>Profile</h4>
                    <p>Some info may be visible to other people</p>
                </div>
                <Link href="/account/edit"><a className="cta">Edit</a></Link>
            </div>
            <div className="item">
                <p>PHOTO</p>
                <img className="photo" src={photoUrl || '/img/avatar.png'}/>
            </div>
            <div className="item">
                <p>NAME</p>
                <p>{name}</p>
            </div>
            <div className="item">
                <p>BIO</p>
                <p>{bio}</p>
            </div>
            <div className="item">
                <p>PHONE</p>
                <p>{phone}</p>
            </div>
            <div className="item">
                <p>EMAIL</p>
                <p>{email}</p>
            </div>
            <div className="item">
                <p>PASSWORD</p>
                <p>************</p>
            </div>
        </div>
        <div className="footer">
            <p>created by abiodun-michael</p>
            <p>devChallenges.io</p>
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
                margin-top:44px;
            }

            .frame-top{
                height:114px;
                display:flex;
                align-items:center;
                padding:0 49px;
                border-bottom: 1px solid #D3D3D3;
                justify-content:space-between;
            }

            .frame-top h4{
                color:#000000;
                font-size:24px;
                line-height:33px;
            }

            .frame-top p{
                color:#828282;
                font-weight:500;
                fomt-size:13px;
                line-height:18px;
            }

            .frame-top a{
                height:38px;
                width:95px;
                border-radius:12px;
                border: 1px solid #828282;
                display:flex;
                align-items:center;
                justify-content:center;
                color:#828282;
                font-size:16px;
                font-weight:500;
            }

            .frame .item{
                height:114px;
                display:flex;
                align-items:center;
                padding:0 49px;
            }

            .frame .item:not(:last-child){
                border-bottom: 1px solid #D3D3D3;
            }

            .frame .item p:first-child{
                color:#BDBDBD;
                font-size:13px;
                font-weight:500;
                width:200px;
            }

            .frame .item p:nth-child(2){
                color: #333333;
                font-size:18px;
                font-weight:500;
                text-align:left;
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

            .photo{
                width:72px;
                height:72px;
                border-radius:8px;
                object-fit:cover;
            }

            @media (max-width: 767.98px){
              .frame{
                  border:none;
                  width:100%;
                  
              }

              #txt{
                  width:200px;
              }

              .frame-top{
                  padding:0 22px;
              }

              .footer{
                width:100%;
                padding:0 22px;
            }

              .frame .item{
                  padding:0 22px;
                  position:relative;
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

export default Profile
import { useState } from 'react'
import {Down,Account,Group,Exit} from '../../components/icons'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Avatar = ()=>{

    const {name,photoUrl} = useSelector(state=>state?.profile?.me) ||{}

    const [open, setOpen] = useState(false)

    return(
        <>
        <div className="avatar">
            {!photoUrl ? <span className="img">{name?.charAt(0)}</span>:
            <img id="avt" src={photoUrl}/>}
            <span className="name">{name || "NA"}</span>
            <span className='trigger'><Down onClick={()=>setOpen(!open)}/></span>
        </div>

        <div className='dropdown'>
            <ul>
                <Item icon={Account} target="/account/" label="My Profile"/>
                <Item icon={Group} label="Group Chat"/>
                <hr />
                <Item color="red" icon={Exit} target="/logout" label="Logout"/>
            </ul>
        </div>

            <style jsx>{`
                .avatar{
                    display:flex;
                    height:100%;
                    align-items:center;
                    gap:10px;
                    position:relative;
                }

                .avatar .img{
                    display:inline-block;
                    width:36px;
                    height:36px;
                    background:#2F80ED;
                    border-radius:8px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    color:#ffffff;
                }
                #avt{
                    width:36px;
                    height:36px;
                    object-fit:cover;
                    border-radius:8px;
                }

                .avatar .name{
                    font-weight:700;
                    font-size:12px;
                    line-height:16px;
                    color:#333333;
                }
                
                .dropdown{
                    height:auto;
                    width:188px;
                    border-radius:12px;
                    border:1px solid #E0E0E0;
                    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
                    margin-top:50px;
                    position:absolute;
                    right:70px;
                    background:#ffffff;
                    padding:14px 11px;
                    display: ${open ? 'block':"none"};

                }

                .dropdown ul{
                    list-style-type:none;
                    padding:0;
                    display:flex;
                    flex-direction:column;
                    gap:10px;
                }

                @media (max-width: 767.98px){
                    .name, .trigger{
                       display:none;
                    }

                }
                
            `}</style>
        </>
    )
}


export default Avatar


const Item = ({icon:Icon, label, target="#",color})=>{

    return(
        <>
        <li>
            <Link href={target}>
                <a>
                <Icon />
                {label}
                </a>
            </Link>
        </li>
        <style jsx>{`
            li a{
                height:40px;
                width:100%;
                display:flex;
                border-radius: 8px;
                align-items:center;
                gap:10px;
                padding:0 13px;
            }

            li a, li a > svg{
                color:${color ? color : "#4F4F4F"} !important;
            }

            li a:hover{
                background:#F2F2F2;
            }
        
        `}</style>
        </>
    )
}
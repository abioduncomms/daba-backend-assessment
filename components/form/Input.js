import { useState } from "react"

const Input = ({icon:Icon,value,name,label,error,onChange=()=>{},...rest})=>{

    const [state, setState] = useState(false)

    return(
        <>
            <div className="atx">
                    <label htmlFor={name}>{label}</label>
                    <div className="input-wrapper">
                       {Icon ? <Icon style={{height:24, width:24}}/>:null}
                        <input value={value} name={name} {...rest}  onBlur={()=>setState(false)} onFocus={()=>setState(true)} onChange={(e)=>onChange(e.target.value)}/>
                    </div>
                    <span className="error">{error}</span>
                  
                </div>
            <style jsx>{`

                input{
                    outline:none;
                    width:100%;
                    height:100%;
                    border:none;
                    color:#828282;
                    font-size:16px;
                    line-height:21.79px;
                    font-weight:400;
                    padding-top:2px;
                    background:transparent;
                }

                input:focus{
                    border-color:blue;
                }
                input::placeholder{
                    color:#828282;
                }

                .input-wrapper{
                    display:flex;
                    border: 1px solid ${state && !error ? '#2F80ED': error ? 'red':'#BDBDBD'};
                    border-radius:8px;
                    height:45px;
                    align-items:center;
                    padding:0 14px;
                    
                }

                .input-wrapper svg{
                    fill:#828282;
                    margin-right:5px;
                }

                .atx:not(:first-child){
                    margin-top:20px;
                }

                .error{
                    color:red;
                    font-size:12px;
                }

                label{
                    color: #4F4F4F;
                    font-size:13px;
                    font-weight:500;
                }

            
            `}</style>
        </>
    )
}

export default Input
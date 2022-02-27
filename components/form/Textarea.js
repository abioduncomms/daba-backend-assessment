

const Textarea = ({label,name,onChange=()=>{},error,value})=>{

    return(
        <>
         <div className="atx">
            <label htmlFor={name}>{label}</label>
            <textarea className={error ? 'error':''} value={value} onChange={(e)=>onChange(e.target.value)}/>
         </div>
        <style jsx>{`
            textarea{
                outline:none;
                    width:100%;
                    border:none;
                    color:#828282;
                    font-size:16px;
                    line-height:21.79px;
                    font-weight:400;
                    padding:5px 15px;
                    background:transparent;
                    border: 1px solid #BDBDBD;
                    border-radius:8px;
                    height:91px;
                    resize:none;
                    font-family:inherit;
            }

            textarea::placeholder{
                color:#828282;
            }

            textarea:focus{
                border-color:#2F80ED;
            }

            .error{
                border-color:red;
            }
            .atx:not(:first-child){
                margin-top:20px;
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

export default Textarea
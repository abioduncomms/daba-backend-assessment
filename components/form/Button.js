

const Button = ({type,loading,block,children,...rest})=>{

    return(
        <>
        <button disabled={loading} className={`btn ${type}`} {...rest}>{loading ? 'Loading...':children}</button>

        <style jsx>{`
            .btn{
                height:38px;
                border-radius:8px;
                border:none;
                outline:0;
                padding: 0 20px;
                width: ${block ? '100%':'auto'}
            }

            .primary{
                background: #2F80ED;
                color:#ffffff;
            }

            .block{
                width:100%;
            }

            button:not(:disabled){
                cursor:pointer;
            }
        `}</style>
        </>
    )
}

export default Button
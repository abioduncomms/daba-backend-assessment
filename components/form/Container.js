

const Container = ({children})=>{


    return(
        <>
            <div className="outer-wrapper">
                <div className="container">
                {children}
                </div>
            </div>
           

            <style jsx>{`
                .container{
                    border:1px solid #BDBDBD;
                    border-radius:24px;
                    padding:59px;
                    width:475px;
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
                }
            
            `}</style>
        </>
    )
}

export default Container
import Header from './Header'


const MainLayout = ({children})=>{

    return(
        <>
        <Header />
        <div className='pg-wrapper'>
        {children}
        </div>

        <style jsx>{`
            .pg-wrapper{
                display:flex;
                align-items:center;
                flex-direction:column;
            }

            @media (max-width: 767.98px){
                .pg-wrapper{
                    display:block;
                    width:100%;
                }
            }
        `}</style>
        </>
    )
}

export default MainLayout
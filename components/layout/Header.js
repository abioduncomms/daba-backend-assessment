import { Logo } from "../icons"
import Avatar from "./Avatar"

const Header = ()=>{
    return(
        <>
        <nav>
            <Logo />
            <Avatar />
        </nav>

        <style jsx>{`
            nav{
                padding: 26px 72px;
                display:flex;
                justify-content:space-between;
            }

            @media (max-width: 767.98px){
                nav{
                    padding: 26px 20px;  
                }
            }
        `}</style>
        </>
    )
}

export default Header
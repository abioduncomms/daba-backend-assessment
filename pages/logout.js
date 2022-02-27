import {LOGOUT} from '../graphql/Auth'
import {client} from '../graphql'


const Logout = ()=>{

    return(
        <p>Loading...</p>
    )
}


export async function getServerSideProps({query}) {

    client.query({query:LOGOUT})

        
    return {
        redirect: {
            permanent: false,
            destination: "/",
        },
        props:{},
    };
         
  }


export default Logout
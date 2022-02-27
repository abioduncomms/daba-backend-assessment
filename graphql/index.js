import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {createUploadLink} from 'apollo-upload-client'

const httpLink = createUploadLink({
    uri: process.env.NEXT_PUBLIC_BASE_URL,
    credentials: 'include'
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers
      }
    }
  });
  
  export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    errorPolicy:"ignore"
  });


  const AuthProvider = ({children})=>{

    return(
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
  }

  export default AuthProvider
import '../public/css/global.css'
import AuthProvider from '../graphql'
import store from '../redux/store'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NextNprogress from 'nextjs-progressbar'
import 'nprogress/nprogress.css'


const MyApp = ({Component, pageProps})=>{


    return(
        <AuthProvider>
            <ToastContainer 
                theme='light' 
                position='top-center'
                hideProgressBar/>
                <NextNprogress
                   startPosition={0.3}
                   stopDelayMs={200}
                   height={2}
                   showOnShallow={true}
                   options={{
                       showSpinner: true
                   }}
               />
            <Provider store={store}>
                <Component {...pageProps}/>
            </Provider>
        </AuthProvider>
    )
}

export default MyApp
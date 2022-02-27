import {useLazyQuery} from '@apollo/client'
import { useEffect, useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { addMe } from '../../redux/reducer/auth'
import { GET_MY_PROFILE } from '../../graphql/Auth'
import Spinner from '../spinner'
import Router from 'next/router'


const withAuth = (WrappedComponent)=>{


    const Hoc = ({...props})=>{
        const [state, setState] = useState(true)

        const profile = useSelector(state=>state?.profile?.me)

        const dispatch = useDispatch()

        const [getMyProfile,{data,loading}] = useLazyQuery(GET_MY_PROFILE,{
            onCompleted({getMyProfile}){
                dispatch(addMe(getMyProfile))
                setState(false)
            }
        })

        useEffect(()=>{
            if(!profile){
                getMyProfile()
            }
        },[profile])

        if(loading){
            return  <Wrap />
        }

        if(!loading && !state && !profile){
            Router.replace("/")
            return<></>
        }


        return <WrappedComponent {...props}/>
    }

    return Hoc
}


export default withAuth


const Wrap = ()=>{


    return(
        <div style={{height:"100%", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Spinner style={{height:30}}/>
        </div>
    )
}
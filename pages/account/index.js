import Profile from '../../sections/auth/Profile'
import MainLayout from '../../components/layout/Main'
import withAuth from '../../components/hoc'

const Index = ()=>{

    return(
        <MainLayout>
            <Profile />
        </MainLayout>
    )
}

export default withAuth(Index)
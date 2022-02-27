import Edit from '../../sections/auth/Edit'
import MainLayout from '../../components/layout/Main'
import withAuth from '../../components/hoc'


const EditProfile = ()=>{

    return(
        <MainLayout>
            <Edit />
        </MainLayout>
    )
}

export default withAuth(EditProfile)
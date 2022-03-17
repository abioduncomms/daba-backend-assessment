import * as Yup from 'yup';

export const LOGIN_REGISTER_FORM =  Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
});


export const UPDATE_FORM =  Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    name: Yup.string().required('Name is required'),
    phone: Yup.string().required('Phone is required'),
    bio: Yup.string().required('Bio is required'),
});

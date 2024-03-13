import React from 'react';
import { useSelector } from 'react-redux';
import AuthForm from './AuthForm';
import ProfileForm from './ProfileForm';

const ProfileBody = () => { 
    const userToken = useSelector((state) => state.user.token);  
    
    return (
        (userToken === null ? (
            <AuthForm />
        ) : (
            <ProfileForm />
        ))
    );
};

export default ProfileBody;

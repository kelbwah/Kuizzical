import React from 'react';
import { useSelector } from 'react-redux';
import AuthForm from './AuthForm';
import ProfileForm from './ProfileForm';

const ProfileBody = () => { 
    const user = useSelector((state) => state.user);  
    
    return (
        (user.token === null ? (
            <AuthForm />
        ) : (
            <ProfileForm />
        ))
    );
};

export default ProfileBody;

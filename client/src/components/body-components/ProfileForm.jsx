import React, { useRef, useState } from 'react';
import { Register, Login } from '../../services/AuthServiceWrapper';
import { CSSTransition } from 'react-transition-group';
import { Spinner, Tooltip } from 'flowbite-react';
import { transformAndValidateBody } from '../../utils/ProfileUtils';
import CustomToast from '../CustomToast';
import { setLogout } from '../../states/UserState';
import { useDispatch } from 'react-redux';

// TODO: First finish up the quiz stuff and then work on this
// TODO: Need to display any user's made quizzes
const ProfileForm = () => { 
 
    const dispatch = useDispatch();
    
    const Logout = () => {
        dispatch(setLogout());
    };

    return (
        <>
            <form className='fade-in-fast'>Profile Form</form>
            <button onClick={() => Logout()}>Log Out</button>
        </>
        
    );
};

export default ProfileForm;

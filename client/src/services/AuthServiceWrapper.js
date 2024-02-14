import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogout } from '../states/UserState.js';
import { timeoutAPICall } from '../utils/DebounceUtils.js';
import { formDataTransform } from '../utils/ProfileUtils.js'; 

export const Register = async (body) => {
    console.log('here!');
    const formData = formDataTransform(body); 
    await timeoutAPICall(2000); 
    const { data } = await axios.post('/auth/register', formData, {
        headers: {
            'Content-Type': 'application/json',
        }}
    );
    console.log(data);

    return data;
};

export const Login = async (body) => {
    console.log('login here!');
    const formData = formDataTransform(body); 
    await timeoutAPICall(2000);
    const response = await axios.post('/auth/login', formData, {
        headers: {
            'Content-Type': 'application/json',
        }}
    );
    console.log(response);

    return response;
};

export const Logout = () => {
    useDispatch(setLogout()); 
};


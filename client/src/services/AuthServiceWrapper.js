import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setLogout } from '../states/UserState.js';
import { pseudoAPICall } from '../utils/DebounceUtils.js';
import { formDataTransform } from '../utils/ProfileUtils.js';

export const Register = async (body) => {
    const formData = formDataTransform(body);
    await pseudoAPICall(2000);
    const { data } = await axios.post('/auth/register', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return data;
};

export const Login = async (body) => {
    const formData = formDataTransform(body);
    await pseudoAPICall(2000);
    const response = await axios.post('/auth/login', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    return response;
};

export const Logout = () => {
    useDispatch(setLogout());
};

import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Register, Login } from '../../services/AuthServiceWrapper';
import { CSSTransition } from 'react-transition-group';
import { Spinner, Tooltip } from 'flowbite-react';
import { transformAndValidateBody } from '../../utils/ProfileUtils';
import { setLogin } from '../../states/UserState';
import { removeError, setError } from '../../states/ErrorState';
//import { removeSuccess, setSuccess } from '../../states/SuccessState';

const AuthForm = () => { 
    const dispatch = useDispatch();
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('Register');
    const [isLoadingSubmission, setIsLoadingSubmission] = useState(false);
    const [authBody, setAuthBody] = useState({
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        age: null,
        academicStatus: null,
    });
    const transitionRef = useRef(null);

    const inputStyles = 'w-full pl-3 pr-2 py-3 text-gray-800 rounded-md lg:text-base md:text-base text-sm focus:outline-none'
    const AcademicStatusEnum = {
        ELEMENTARY: 'Elementary',
        MIDDLE_SCHOOL: 'Middle School',
        HIGH_SCHOOL: 'High School',
        UNDERGRADUATE: 'Undergraduate',
        GRADUATE: 'Graduate',
        OTHER: 'Other',
    };
    const ageArray = Array.from({length: 123}, (_, i) => i + 1);

    const changeAuthBody = (key, newValue) => { 
        const updatedAuthBody = {
            ...authBody,
            [key]: newValue, 
        };

        setAuthBody(updatedAuthBody);
        return updatedAuthBody;
    };

    const submitData = async (e) => {  
        setIsLoadingSubmission(true);
        try {
            dispatch(removeError()); // Removing any errors states if the user had some previously and didn't close it
            const validatedBody = transformAndValidateBody(e, authBody, isLoginOrRegister);
            const { user, token } = isLoginOrRegister === 'Register' ? await Register(validatedBody) : await Login(validatedBody);
            
            setIsLoadingSubmission(false);
            dispatch(
                setLogin({
                    user: user,
                    token: token,
                })
            )
        } catch (err) {  
            dispatch(
                setError({
                    error: err.response.data.error !== null ? err.response.data.error : err.response, 
                })
            );
            setIsLoadingSubmission(false);
        };
    };

    useEffect(() => {
        document.title = isLoginOrRegister === 'Register' ? 'Register' : 'Login';
    }, [isLoginOrRegister]);

    return (
        <CSSTransition
            key={isLoginOrRegister}
            in={true}
            appear={true}
            timeout={100}
            nodeRef={transitionRef}
        >
            <form onSubmit={ (e) => isLoadingSubmission !== true ? submitData(e) : e.preventDefault() } className='flex flex-col gap-2 items-center lg:text-base md:text-base text-sm fade-in-fast'> 
                <h1 className='text-gray-100 font-black lg:text-4xl md:text-4xl text-3xl hover:text-yellow-300 ease-in-out duration-200 mb-8'>{isLoginOrRegister}</h1>
                <div className={`w-full grid ${isLoginOrRegister === 'Register' ? 'grid-cols-2' : 'grid-cols-1'} grid-auto-flow-column place-content-center place-items-center gap-8 mb-8`}>
                    {isLoginOrRegister === 'Register' && (
                        <>
                            <Tooltip content='First Name'><input required onChange={(e) => changeAuthBody('firstName', e.target.value)} value={authBody.firstName} className={`${inputStyles}`} placeholder='First Name'></input></Tooltip>
                            <Tooltip content='Last Name'><input required onChange={(e) => changeAuthBody('lastName', e.target.value)} value={authBody.lastName} className={`${inputStyles}`} placeholder='Last Name'></input></Tooltip>
                            <Tooltip content='Email'><input required onChange={(e) => changeAuthBody('email', e.target.value)} value={authBody.email} type='email' className={`${inputStyles}`} placeholder='Email'></input></Tooltip>
                            <Tooltip content='Username'><input required onChange={(e) => changeAuthBody('username', e.target.value)} value={authBody.username} className={`${inputStyles}`} placeholder='Username'></input></Tooltip>
                            <Tooltip content='Must be at least 8 characters, have no spaces, include lower and uppercase letters, and at least one special character'><input required onChange={(e) => changeAuthBody('password', e.target.value)} value={authBody.password} type='password' className={`${inputStyles}`} placeholder='Password'></input></Tooltip> 
                            <select
                                required
                                value={authBody.age} 
                                onChange={(e) => changeAuthBody('age', e.target.value)} 
                                className={inputStyles}
                            >
                                <option selected disabled>Choose your age</option>
                                {ageArray.map((age) => (
                                    <option key={age} value={age}>
                                        {age}
                                    </option>
                                ))}
                            </select>
                            <select
                                required
                                value={authBody.academicStatus} 
                                onChange={(e) => changeAuthBody('academicStatus', e.target.value)}
                                className="w-full col-span-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-gray-600 lg:text-base md:text-base text-sm"
                            >
                                <option selected disabled>Academic Status</option>
                                {Object.values(AcademicStatusEnum).map((status) => (
                                    <option key={status} value={status}>
                                        {status}
                                    </option>
                                ))}
                            </select>
                        </>
                    )} 
                    {isLoginOrRegister === 'Login' && (
                        <>
                            <input required onChange={(e) => changeAuthBody('username', e.target.value)} value={authBody.username} className={`${inputStyles}`} placeholder='Username'></input>
                            <input required onChange={(e) => changeAuthBody('password', e.target.value)} value={authBody.password} type='password' className={`${inputStyles}`} placeholder='Password'></input>
                        </>
                    )}
                </div>
                <button className='w-full rounded-md font-bold text-gray-600 px-2 py-3 bg-yellow-300 hover:bg-yellow-400 focus:outline-none ease-in-out duration-300 mb-4'>{isLoadingSubmission === false ? `${isLoginOrRegister}` : <Spinner />}</button>
                <p onClick={() => setIsLoginOrRegister((prev) => prev === 'Register' ? 'Login' : 'Register')} className='font-semibold text-gray-100 underline text-xs cursor-pointer hover:text-yellow-300 active:text-yellow-200 ease-in-out duration-200 text-center'>{isLoginOrRegister === 'Register' ? "Already have an account? Press here to login" : "Don't have an account? Press here to register"}</p>
            </form>
        </CSSTransition>
    );
};

export default AuthForm;

import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setError } from '../../states/ErrorState';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FloatingLabel, Select, Label } from 'flowbite-react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import ButtonWithIcon from '../ButtonWithIcon';

/*
const termAndDefinitionSchema = new mongoose.Schema({
    term: String,
    definition: String,
    isTermImage: Boolean,
    isDefinitionImage: Boolean,
}, { _id: false });

const QuizSchema = new mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            minLength: 1,
            maxLength: 50, 
            required: true,
        },
        description: {
            type: String,
            minLength: 1,
            maxLength: 75, 
            required: true,
        },
        termsAndDefinitions: [termAndDefinitionSchema],
        visibility: {
            type: String,
            enum: ['Private', 'Public', 'Invite-Only'],
            requried: true,
        },
    },
    { timestamps: true },
*/

const CreateQuizBody = () => {
    const transitionRef = useRef(null); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [quizForm, setQuizForm] = useState({
        author: user.user !== null ? user.user._id : null,
        title: '',
        description: '',
        termsAndDefinitions: null,
        visibility: null,
    });
    const [quizStep, setQuizStep] = useState(0);
    const quizStepPercentage = ((quizStep / 4) * 100);

    const changeQuizStep = (changeType) => {
        switch (changeType) {
            case 'add':
                if (quizStep < 3) {
                    setQuizStep((curr) => curr + 1);
                };
                break;
            case 'subtract':
                if (quizStep > 0) {
                    setQuizStep((curr) => curr - 1);
                };
                break;
            default:
                break;
        };
    };

    const changeQuizForm = (key, newValue) => { 
        switch (key) {
            case 'title':
                if (quizForm.title.length >= 50 && newValue.length >= 50) {
                    return;
                };
            case 'description':
                if (quizForm.description.length >= 75 && newValue.length >= 75) {
                    return;
                };
        };
        const updatedQuizForm = {
            ...quizForm,
            [key]: newValue, 
        };

        setQuizForm(updatedQuizForm);
        return updatedQuizForm;
    };

    useEffect(() => {
        const dispatchTokenError = () => {
            dispatch(setError({error: 'Must be logged in to create a quiz.'}));
        };

        if (user.token === null) {
            navigate('/profile'); 
            dispatchTokenError();
        };
    }, [user]);

    return (
        <CSSTransition
            in={ true }
            appear={ true }
            timeout={ 100 }
            nodeRef={ transitionRef }
        >
            <div className='mt-10 relative flex flex-col gap-14 w-full h-full items-center fade-in-fast justify-start'>
                <div className='flex flex-col gap-5 items-center'>
                    <h1 className='lg:text-4xl md:text-4xl text-3xl hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 font-black'>
                        { quizStep === 0 ? 'Create your quiz' : 'Terms and Definitions' }
                     </h1>
                    <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                      <div className={ `bg-yellow-300 h-2.5 rounded-full w-[${quizStepPercentage.toString()}%]` }></div>
                    </div>
                </div>
                { quizStep === 1 ? (
                    <div className='flex flex-col gap-6 items-center w-full text-gray-200 overflow-auto'>
                        <div>
                            <FloatingLabel required onChange={ (e) => changeQuizForm('title', e.target.value) } value={ quizForm.title } className='lg:w-[375px] md:w-[375] w-[275px]' variant='filled' label='Title' />
                            <p className='text-gray-200 text-sm'>{ `${quizForm.title.length}/50 words` }</p>
                        </div>
                        <div>
                            <FloatingLabel required onChange={ (e) => changeQuizForm('description', e.target.value) } value={ quizForm.description } className='lg:w-[375px] md:w-[375] w-[275px]' variant='filled' label='Description' />
                            <p className='text-gray-200 text-sm'>{ `${quizForm.description.length}/75 words` }</p>
                        </div>
                        <div className='lg:w-[375px] md:w-[375] w-[275px]'>
                            <Select id="countries" required onSelect={ () => changeQuizForm('visibility', e.target.value) }>
                                <option>Public</option>
                                <option>Private</option>
                                <option>Invite-Only</option>
                            </Select>
                            <div className='mt-1 block text-gray-200'>
                                <Label className='text-gray-200' htmlFor='countries' value='Select your country' />
                            </div>
                        </div>
                    </div>
                ) : quizStep === 2 ? (
                    <div className='flex flex-col gap-6 items-center w-full text-gray-200 overflow-auto'>
                        
                    </div>
                ) : quizStep === 3 ? (
                    <div className='flex flex-col gap-6 items-center w-full text-gray-200 overflow-auto'>
                    </div>
                ) : (
                    <div className='flex flex-col gap-6 items-center w-full text-gray-200 overflow-auto'>
                    </div>
                ) }
                <div className='flex gap-4 w-full items-center justify-center'>
                    <ButtonWithIcon onClickFunc={ () => changeQuizStep('subtract') } icon={ <FaArrowLeft /> } text='Previous'/>
                    <ButtonWithIcon onClickFunc={ () => changeQuizStep('add') } icon={ <FaArrowRight /> } text='Next'/>
                </div>
            </div>
        </CSSTransition>
    );
};

export default CreateQuizBody;

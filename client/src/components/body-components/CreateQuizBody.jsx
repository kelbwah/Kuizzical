import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setError, removeError } from '../../states/ErrorState';
import { setSuccess } from '../../states/SuccessState';
import { Button, Modal } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FaUpload } from 'react-icons/fa';
import { FaFileImage, FaTrashCan } from 'react-icons/fa6';
import { MdDeleteOutline } from 'react-icons/md';
import { IoAddCircle } from 'react-icons/io5';
import ButtonWithIcon from '../ButtonWithIcon';
import { uploadImage } from '../../services/S3ServiceWrapper';
import { createQuiz } from '../../services/QuizServiceWrapper';
import PropTypes from 'prop-types';

const DeleteImageModal = ({ openModal, setOpenModal, imageDeleteFunc }) => {
    return (
        <Modal
            show={openModal}
            onClose={() => setOpenModal([false, null, null])}
            size='md'
            popup
        >
            <Modal.Header />
            <Modal.Body>
                <div className='text-center'>
                    <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
                        Do you want to delete the image?
                    </h3>
                    <div className='flex justify-center gap-4'>
                        <Button color='failure' onClick={imageDeleteFunc}>
                            Yes, delete the image
                        </Button>
                        <Button
                            color='gray'
                            onClick={() => setOpenModal([false, null, null])}
                        >
                            No, cancel
                        </Button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

const TermAndDefinitionBody = ({
    termNumber,
    termImageUploadRef,
    definitionImageUploadRef,
    changeTermsAndDefinitionsCount,
    changeTermsAndDefinitions,
    quizForm,
    openImageInput,
    setOpenModal
}) => {
    return (
        <div className='px-6 py-5 flex flex-col gap-7 w-full bg-gray-200 bg-opacity-5 hover:bg-opacity-10 active:bg-opacity-15 ease-in-out duration-200 rounded-xl'>
            <input
                type='file'
                style={{ display: 'none' }}
                accept='image/*'
                ref={termImageUploadRef}
                onChange={(e) =>
                    changeTermsAndDefinitions(
                        termNumber,
                        'term',
                        true,
                        false,
                        e.target.files[0]
                    )
                }
            ></input>
            <input
                type='file'
                style={{ display: 'none' }}
                accept='image/*'
                ref={definitionImageUploadRef}
                onChange={(e) =>
                    changeTermsAndDefinitions(
                        termNumber,
                        'definition',
                        true,
                        false,
                        e.target.files[0]
                    )
                }
            ></input>
            <div className='flex w-full justify-between items-center'>
                <p className='lg:text-xl md:text-xl text-lg font-semibold text-gray-200'>
                    {termNumber + 1}
                </p>
                <FaTrashCan
                    onClick={() =>
                        changeTermsAndDefinitionsCount('subtract', termNumber)
                    }
                    className='cursor-pointer w-5 h-5 text-gray-200 hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-200'
                />
            </div>
            <div className='w-full flex lg:flex-row md:flex-row flex-col lg:gap-10 md:gap-10 gap-5'>
                <div className='relative w-full'>
                    <FaFileImage
                        onClick={() => openImageInput('term')}
                        className='text-2xl absolute right-0 mt-3 mr-4 text-gray-800 cursor-pointer hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-200'
                    />
                    <input
                        required
                        value={
                            quizForm['termsAndDefinitions'][termNumber]['term']
                        }
                        onChange={(e) =>
                            changeTermsAndDefinitions(
                                termNumber,
                                'term',
                                false,
                                false,
                                e.target.value
                            )
                        }
                        className='w-full py-3 pl-4 pr-14 text-gray-800 rounded-lg'
                        placeholder='Term'
                    />
                    {quizForm['termsAndDefinitions'][termNumber][
                        'termImageInfo'
                    ].length > 0 && (
                        <div className='relative flex flex-col mt-2'>
                            <div
                                onClick={() =>
                                    setOpenModal([true, termNumber, 'term'])
                                }
                                className='rounded-xl absolute h-full w-full opacity-0 hover:opacity-70 bg-gray-800 ease-in-out duration-200 cursor-pointer'
                            >
                                <MdDeleteOutline className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 w-16 h-16' />
                            </div>
                            <img
                                className='rounded-xl'
                                src={
                                    quizForm.termsAndDefinitions[termNumber]
                                        .termImageInfo
                                }
                            />
                        </div>
                    )}
                </div>
                <div className='relative w-full'>
                    <FaFileImage
                        onClick={() => openImageInput('definition')}
                        className='text-2xl absolute right-0 mt-3 mr-4 text-gray-800 cursor-pointer hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-200'
                    />
                    <input
                        required
                        value={
                            quizForm['termsAndDefinitions'][termNumber][
                                'definition'
                            ]
                        }
                        onChange={(e) =>
                            changeTermsAndDefinitions(
                                termNumber,
                                'definition',
                                false,
                                false,
                                e.target.value
                            )
                        }
                        className='w-full py-3 pl-4 pr-14 text-gray-800 rounded-lg'
                        placeholder='Definition'
                    />
                    {quizForm['termsAndDefinitions'][termNumber][
                        'definitionImageInfo'
                    ].length > 0 && (
                        <div className='relative flex flex-col mt-2'>
                            <div
                                onClick={() =>
                                    setOpenModal([
                                        true,
                                        termNumber,
                                        'definition'
                                    ])
                                }
                                className='rounded-xl absolute h-full w-full opacity-0 hover:opacity-50 bg-gray-500 ease-in-out duration-200 cursor-pointer'
                            ></div>
                            <img
                                className='rounded-xl'
                                src={
                                    quizForm.termsAndDefinitions[termNumber]
                                        .definitionImageInfo
                                }
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// TODO: Refactor this damn code, its too confusing
const CreateQuizBody = () => {
    const transitionRef = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    const [openModal, setOpenModal] = useState([false, null, null]);
    const [termsAndDefinitionsCount, setTermsAndDefinitionsCount] = useState(1);
    const mockElementsArray = Array.from({ length: termsAndDefinitionsCount });
    const termImageUploadRef = useRef(null);
    const definitionImageUploadRef = useRef(null);
    const [isSubmitLoading, setIsSubmitLoading] = useState(false);
    const [quizForm, setQuizForm] = useState({
        author: user.user !== null ? user.user._id : null,
        title: '',
        description: '',
        termsAndDefinitions: [
            {
                term: '',
                definition: '',
                termImageInfo: '',
                definitionImageInfo: ''
            }
        ],
        visibility: null
    });

    const changeQuizForm = (key, newValue) => {
        switch (key) {
            case 'title':
                if (quizForm.title.length >= 75 && newValue.length >= 75) {
                    return;
                }
                break;
            case 'description':
                if (
                    quizForm.description.length >= 350 &&
                    newValue.length >= 350
                ) {
                    return;
                }
                break;
        }
        const updatedQuizForm = {
            ...quizForm,
            [key]: newValue
        };

        setQuizForm(updatedQuizForm);

        return updatedQuizForm;
    };

    const changeTermsAndDefinitionsCount = (
        addOrSubtract,
        subtractIndex = null
    ) => {
        switch (addOrSubtract) {
            case 'add':
                setTermsAndDefinitionsCount((prev) => prev + 1);
                const termsAndDefinitions = quizForm.termsAndDefinitions;
                termsAndDefinitions.push({
                    term: '',
                    definition: '',
                    termImageInfo: '',
                    definitionImageInfo: ''
                });

                const updatedQuizForm = {
                    ...quizForm,
                    ['termsAndDefinitions']: termsAndDefinitions
                };
                setQuizForm(updatedQuizForm);

                break;
            case 'subtract':
                if (termsAndDefinitionsCount > 1) {
                    setTermsAndDefinitionsCount((prev) => prev - 1);
                    const termsAndDefinitions = quizForm.termsAndDefinitions;
                    termsAndDefinitions.splice(subtractIndex, 1);

                    const updatedQuizForm = {
                        ...quizForm,
                        ['termsAndDefinitions']: termsAndDefinitions
                    };
                    setQuizForm(updatedQuizForm);
                }

                break;
            default:
                break;
        }
    };

    const changeTermsAndDefinitions = async (
        index,
        isTermOrDefinition,
        isImageUpload,
        isImageDelete,
        value
    ) => {
        const indexToUpdate = quizForm.termsAndDefinitions[index];
        const termsAndDefinitions = quizForm.termsAndDefinitions;

        if (isImageUpload === true) {
            const { data } = await uploadImage(value);
            indexToUpdate[
                isTermOrDefinition === 'term'
                    ? 'termImageInfo'
                    : 'definitionImageInfo'
            ] = data.imageUrl;

            termsAndDefinitions[index] = indexToUpdate;

            const updatedQuizForm = {
                ...quizForm,
                ['termsAndDefinitions']: termsAndDefinitions
            };

            setQuizForm(updatedQuizForm);

            return;
        } else if (isImageDelete === true) {
            indexToUpdate[
                isTermOrDefinition === 'term'
                    ? 'termImageInfo'
                    : 'definitionImageInfo'
            ] = '';

            termsAndDefinitions[index] = indexToUpdate;

            const updatedQuizForm = {
                ...quizForm,
                ['termsAndDefinitions']: termsAndDefinitions
            };

            setQuizForm(updatedQuizForm);

            return;
        } else {
            indexToUpdate[isTermOrDefinition] = value;
            termsAndDefinitions[index] = indexToUpdate;

            const updatedQuizForm = {
                ...quizForm,
                ['termsAndDefinitions']: termsAndDefinitions
            };

            setQuizForm(updatedQuizForm);

            return;
        }
    };

    const openImageInput = (isTermOrDefinition) => {
        switch (isTermOrDefinition) {
            case 'term':
                termImageUploadRef.current.click();
                break;
            case 'definition':
                definitionImageUploadRef.current.click();
                break;
            default:
                break;
        }
    };

    const handleImageDeleteModalSubmit = () => {
        changeTermsAndDefinitions(
            openModal[1],
            openModal[2],
            false,
            true,
            null
        );
        setOpenModal(false, null, null);
    };

    const submitForm = async () => {
        dispatch(removeError());
        setIsSubmitLoading(true);

        const hasEmptyTermOrDefinition = quizForm.termsAndDefinitions.some(
            (item) => item.term.length < 1 || item.definition < 1
        );

        if (
            quizForm.title.length < 1 ||
            quizForm.description.length < 1 ||
            quizForm.visibility == null ||
            hasEmptyTermOrDefinition
        ) {
            dispatch(
                setError({
                    error: 'Fill in all fields.'
                })
            );

            return;
        } else if (quizForm.title.length > 75) {
            dispatch(
                setError({
                    error: 'Title must be at most 75 characters.'
                })
            );

            return;
        } else if (quizForm.description.length > 350) {
            dispatch(
                setError({
                    error: 'Description must be at most 350 characters.'
                })
            );

            return;
        }

        try {
            const quiz = await createQuiz(quizForm, user);
            if (quiz) {
                setIsSubmitLoading(false);
                dispatch(
                    setSuccess({
                        success: 'Quiz created!'
                    })
                );
                navigate(`/quiz/${quiz.data.quiz._id}`);
            }
        } catch (err) {
            setIsSubmitLoading(false);
            dispatch(
                setError({
                    error: err.message
                })
            );
        }
    };

    useEffect(() => {
        const dispatchTokenError = () => {
            dispatch(
                setError({ error: 'Must be logged in to create a quiz.' })
            );
        };

        if (user.token === null) {
            navigate('/profile');
            dispatchTokenError();
        }
    }, [user, dispatch, navigate]);

    return (
        <CSSTransition
            in={true}
            appear={true}
            timeout={100}
            nodeRef={transitionRef}
        >
            <div className='mt-10 relative flex flex-col gap-14 w-full min-h-screen items-center fade-in-fast justify-start'>
                <DeleteImageModal
                    openModal={openModal[0]}
                    setOpenModal={setOpenModal}
                    imageDeleteFunc={handleImageDeleteModalSubmit}
                />
                <form
                    onSubmit={submitForm}
                    className='w-full flex flex-col gap-5 items-center'
                >
                    <div className='w-full flex justify-between lg:items-start md:items-start items-center'>
                        <h1 className='lg:text-4xl md:text-4xl text-2xl hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 font-bold'>
                            Crafting your quiz set
                        </h1>
                        <ButtonWithIcon
                            isLoading={isSubmitLoading}
                            onClickFunc={submitForm}
                            text='Submit'
                            icon={<FaUpload />}
                        />
                    </div>
                    <div className='flex flex-col w-full items-center'>
                        <div className='flex flex-col gap-8 w-full'>
                            <div className='flex w-full justify-between items-start gap-4'>
                                <div className='flex flex-col w-2/3 gap-1'>
                                    <input
                                        required
                                        value={quizForm.title}
                                        onChange={(e) =>
                                            changeQuizForm(
                                                'title',
                                                e.target.value
                                            )
                                        }
                                        className='w-full text-gray-800 py-3 px-4 rounded-lg'
                                        placeholder='Title'
                                    />
                                    <p className='text-gray-200 text-sm'>{`${quizForm.title.length} / 75`}</p>
                                </div>
                                <select
                                    required
                                    value={quizForm.visibility}
                                    onChange={(e) =>
                                        changeQuizForm(
                                            'visibility',
                                            e.target.value
                                        )
                                    }
                                    className='w-1/3 text-gray-800 py-3 px-4 rounded-lg'
                                >
                                    <option selected disabled>
                                        Visibility
                                    </option>
                                    <option>Public</option>
                                    <option>Private</option>
                                    <option>Invite-Only</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <textarea
                                    required
                                    value={quizForm.description}
                                    onChange={(e) =>
                                        changeQuizForm(
                                            'description',
                                            e.target.value
                                        )
                                    }
                                    className='w-full text-gray-800 pt-4 pb-20 px-4 rounded-lg text-wrap'
                                    placeholder='Description'
                                />
                                <p className='text-gray-200 text-sm'>{`${quizForm.description.length} / 350`}</p>
                            </div>
                            <div className='flex flex-col gap-8 mt-6'>
                                <div className='flex gap-4 items-end'>
                                    <h1 className='lg:text-3xl md:text-3xl text-2xl hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 font-bold'>
                                        Terms and Definitions
                                    </h1>
                                    <p className='text-xs font-medium -translate-y-1'>
                                        Term Count: {termsAndDefinitionsCount}
                                    </p>
                                </div>
                                <div className='flex flex-col gap-14 w-full'>
                                    {mockElementsArray.map((_, index) => (
                                        <TermAndDefinitionBody
                                            termNumber={index}
                                            key={index}
                                            termImageUploadRef={
                                                termImageUploadRef
                                            }
                                            definitionImageUploadRef={
                                                definitionImageUploadRef
                                            }
                                            changeTermsAndDefinitionsCount={
                                                changeTermsAndDefinitionsCount
                                            }
                                            changeTermsAndDefinitions={
                                                changeTermsAndDefinitions
                                            }
                                            quizForm={quizForm}
                                            openImageInput={openImageInput}
                                            setOpenModal={setOpenModal}
                                        />
                                    ))}
                                </div>
                                <div
                                    onClick={() =>
                                        changeTermsAndDefinitionsCount('add')
                                    }
                                    className='cursor-pointer flex flex-col text-gray-200 bg-opacity-5 rounded-2xl hover:bg-opacity-10 active:bg-opacity-15 bg-gray-50 py-20 px-4 items-center justify-center ease-in-out duration-300'
                                >
                                    <div className='flex flex-col gap-4 items-center'>
                                        <IoAddCircle className='lg:text-2xl md:text-2xl text-xl w-12 h-10' />
                                        <p className='lg:text-xl md:text-xl text-base font-bold'>
                                            Add new Term and Definition
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </CSSTransition>
    );
};

DeleteImageModal.propTypes = {
    openModal: PropTypes.any,
    setOpenModal: PropTypes.any,
    imageDeleteFunc: PropTypes.func
};

TermAndDefinitionBody.propTypes = {
    termNumber: PropTypes.number,
    termImageUploadRef: PropTypes.any,
    definitionImageUploadRef: PropTypes.any,
    changeTermsAndDefinitionsCount: PropTypes.func,
    changeTermsAndDefinitions: PropTypes.func,
    quizForm: PropTypes.object,
    openImageInput: PropTypes.func,
    setOpenModal: PropTypes.any
};

export default CreateQuizBody;

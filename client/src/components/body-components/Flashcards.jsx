import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Spinner } from 'flowbite-react';
import { fetchAndSetSpecificQuiz } from '../../utils/QuizUtils';
import { MdFlip } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import ButtonWithIcon from '../ButtonWithIcon';

const Flashcards = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { quizId } = useParams();
    const isQuizLoading = useSelector((state) => state.quiz.isQuizLoading);
    const quiz = useSelector((state) => state.quiz.specificQuiz['quiz']);
    const termsAndDefinitions =
        Object.keys(quiz).length >= 1 ? quiz['termsAndDefinitions'] : null;
    const [currFlashcardIndex, setCurrFlashcardIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const transitionRef = useRef(null);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    const changeCardIndex = (changeType) => {
        setIsFlipped(false);
        switch (changeType) {
            case 'add':
                setCurrFlashcardIndex((curr) => curr + 1);
                break;
            case 'subtract':
                setCurrFlashcardIndex((curr) => curr - 1);
                break;
            default:
                setCurrFlashcardIndex(0);
                break;
        }
    };

    const previousPage = () => {
        navigate(`/quiz/${quizId}`);
    };

    useEffect(() => {
        fetchAndSetSpecificQuiz(dispatch, quizId);
    }, [dispatch, quizId]);

    useEffect(() => {}, [quiz]);

    return (
        <CSSTransition
            key={isQuizLoading}
            in={true}
            appear={true}
            timeout={100}
            nodeRef={transitionRef}
        >
            <div className='flex w-full h-full fade-in-fast -translate-y-6'>
                {!isQuizLoading && Object.keys(quiz).length > 0 ? (
                    <div className='w-full h-full flex flex-col fade-in-fast gap-4'>
                        <div className='mb-7'>
                            <ButtonWithIcon
                                onClickFunc={previousPage}
                                icon={<FaArrowLeft />}
                                text='Back'
                            />
                        </div>
                        <div className='w-full flex justify-between'>
                            <p className='font-semibold lg:text-xl md:text-xl text-lg hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 hover:underline cursor-pointer'>
                                {currFlashcardIndex + 1} /{' '}
                                {termsAndDefinitions.length}
                            </p>
                            <p
                                onClick={() => changeCardIndex()}
                                className='font-semibold lg:text-xl md:tex-txl text-lg hover:underline hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 cursor-pointer'
                            >
                                Start Over
                            </p>
                        </div>
                        <div
                            onClick={flipCard}
                            className='relative flex flex-col font-semibold lg:text-xl md:text-xl text-base items-center justify-center w-full h-[400px] bg-gray-200 text-gray-700 hover:bg-yellow-300 hover:text-gray-800 active:bg-yellow-400 active:text-gray-900 active:scale-95 ease-in-out duration-300 rounded-2xl cursor-pointer shadow-2xl overflow-y-auto'
                        >
                            <MdFlip
                                className={`${isFlipped === true ? 'transform scale-x-[-1]' : ''} fade-in-medium absolute top-5 left-5 ease-in-out duration-500 text-3xl z-[5]`}
                            />
                            {!isFlipped ? (
                                <CSSTransition>
                                    <div className='flex gap-8'>
                                        {termsAndDefinitions &&
                                            termsAndDefinitions[
                                                currFlashcardIndex
                                            ] &&
                                            termsAndDefinitions[
                                                currFlashcardIndex
                                            ]['termImageInfo'] &&
                                            termsAndDefinitions[
                                                currFlashcardIndex
                                            ]['termImageInfo'].length > 0 && (
                                                <img
                                                    src={
                                                        termsAndDefinitions[
                                                            currFlashcardIndex
                                                        ]['termImageInfo']
                                                    }
                                                    className='lg:h-4/5 md:h-4/5 h-5/6 lg:w-3/5 md:w-3/5 w-5/6 fade-in-medium'
                                                />
                                            )}
                                        <p className='fade-in-medium'>
                                            {
                                                termsAndDefinitions[
                                                    currFlashcardIndex
                                                ]['term']
                                            }
                                        </p>
                                    </div>
                                </CSSTransition>
                            ) : (
                                <div className='flex gap-8'>
                                    {termsAndDefinitions &&
                                        termsAndDefinitions[
                                            currFlashcardIndex
                                        ] &&
                                        termsAndDefinitions[currFlashcardIndex][
                                            'definitionImageInfo'
                                        ] &&
                                        termsAndDefinitions[currFlashcardIndex][
                                            'definitionImageInfo'
                                        ].length > 0 && (
                                            <img
                                                src={
                                                    termsAndDefinitions[
                                                        currFlashcardIndex
                                                    ]['definitionImageInfo']
                                                }
                                                className='lg:h-4/5 md:h-4/5 h-5/6 lg:w-3/5 md:w-3/5 w-5/6 fade-in-medium'
                                            />
                                        )}
                                    <p className='fade-in-medium'>
                                        {
                                            termsAndDefinitions[
                                                currFlashcardIndex
                                            ]['definition']
                                        }
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className='flex justify-between gap-8'>
                            <ButtonWithIcon
                                onClickFunc={() => changeCardIndex('subtract')}
                                isDisabled={
                                    currFlashcardIndex === 0 ? true : false
                                }
                                icon={<FaArrowLeft />}
                                text='Previous'
                            />
                            <ButtonWithIcon
                                onClickFunc={() => changeCardIndex('add')}
                                isDisabled={
                                    currFlashcardIndex ===
                                    termsAndDefinitions.length - 1
                                        ? true
                                        : false
                                }
                                icon={<FaArrowRight />}
                                text='Next'
                            />
                        </div>
                    </div>
                ) : (
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full flex flex-col items-center lg:gap-6 md:gap-6 gap-4 fade-in-fast text-center'>
                        <Spinner className='lg:w-6 md:w-6 w-5 lg:h-6 md:h-6 h-5' />
                        <h1 className='lg:text-2xl md:text-xl text-lg font-black text-center hover:text-yellow-300 ease-in-out duration-300'>
                            Generating Flashcards...
                        </h1>
                    </div>
                )}
            </div>
        </CSSTransition>
    );
};

export default Flashcards;

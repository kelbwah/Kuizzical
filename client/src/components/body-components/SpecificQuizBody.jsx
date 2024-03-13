import React, { useState, useEffect, useRef } from 'react';
import { fetchAndSetSpecificQuiz } from '../../utils/QuizUtils';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { Spinner } from 'flowbite-react';
import { MdOutlineIosShare } from "react-icons/md";
import { Tooltip } from 'flowbite-react';
import { FaRegNoteSticky, FaPencil, FaGamepad } from "react-icons/fa6";


const SpecificQuizBody = () => {
    const dispatch = useDispatch();
    const { quizId } = useParams();
    const quiz = useSelector((state) => state.quiz.specificQuiz['quiz']); 
    const isQuizLoading = useSelector((state) => state.quiz.isQuizLoading);
    const [linkCopied, setLinkCopied] = useState(false);
    const transitionRef = useRef(null);
    const navigate = useNavigate();
    const mainCardStyles = 'flex lg:gap-16 md:gap-16 gap-6 lg:flex-row md:flex-row flex-col justify-between w-full bg-easternBlue hover:bg-yellow-300 active:bg-yellow-400 lg:py-20 md:py-20 pt-12 pb-14 lg:px-12 md:px-12 px-8 text-gray-200 hover:text-gray-700 active:text-gray-800 lg:text-2xl md:text-2xl text-xl font-black rounded-2xl shadow-2xl ease-in-out duration-300 cursor-pointer mb-16';
    const mainCardParagraphStyles = 'lg:w-2/3 md:w-2/3 w-full text-base font-medium';
    
    const shareQuiz = () => {
        navigator.clipboard.writeText(window.location.href);
        setLinkCopied(true);
    };

    useEffect(() => {    
        fetchAndSetSpecificQuiz(dispatch, quizId);
    }, []);


    const MainCardComponent = ({ icon, navigationLink, cardTitle, cardParagraph }) => {
        return (
            <div onClick={ () => navigate(navigationLink) } className={ mainCardStyles }>
                <div className='flex gap-3 items-center'>
                    { cardTitle } 
                    { icon }
                </div>
                <p className={ mainCardParagraphStyles }>{ cardParagraph }</p>
            </div>
        )
    };

    return (
        <CSSTransition
            key={isQuizLoading}
            in={true}
            appear={true}
            timeout={100}
            nodeRef={transitionRef}
        >
            <div className='flex w-full h-full fade-in-fast'>
                {(!isQuizLoading && Object.keys(quiz).length > 0) ? (
                    <div className='w-full h-full flex flex-col fade-in-fast'>
                        <div className='flex w-full justify-between items-center mb-12'>
                            <div className='flex flex-col gap-2'>
                                <p className='lg:text-4xl md:text-4xl text-3xl font-black hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 select-none'>{quiz.title}</p>
                                <p className='font-medium lg:text-sm md:text-sm text-xs hover:text-yellow-300 active:text-yellow-400 hover:underline cursor-pointer ease-in-out duration-200'>By { quiz.author['username'] }</p>
                            </div>
                            <Tooltip content={ `${linkCopied === false ? 'Share' : 'Copied to Clipboard!'}` } className='translate-x-0.5'>
                                <MdOutlineIosShare onClick={ shareQuiz } className='translate-x-0.5 lg:text-3xl md:text-3xl text-2xl text-gray-500 hover:text-gray-200 active:text-gray-400 ease-in-out duration-200 cursor-pointer'/>                            
                            </Tooltip>
                        </div>
                        <MainCardComponent 
                            icon={ <FaRegNoteSticky /> } 
                            navigationLink={ `/quiz/${quizId}/flashcards` }
                            cardTitle='Flashcards'
                            cardParagraph='Dive deeper with our meticulously curated flashcards, crafted for concise, impactful learning sessions that elevate understanding.'
                        />
                        <MainCardComponent 
                            icon={ <FaGamepad /> } 
                            navigationLink={ null }
                            cardTitle='Games'
                            cardParagraph='Explore our games, where engaging challenges meet educational value. Designed to sharpen your skills while staying entertained.'
                        />
                        <MainCardComponent 
                            icon={ <FaPencil /> } 
                            navigationLink={ null }
                            cardTitle='Quizzes'
                            cardParagraph='Test your understanding with auto generated quizzes. Given in an exam-like format, you can get rid of all of the pressure before the real deal.'
                        />
                    </div>
                ) : (
                    <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full flex flex-col items-center lg:gap-6 md:gap-6 gap-4 fade-in-fast'>
                        <Spinner className='lg:w-6 md:w-6 w-5 lg:h-6 md:h-6 h-5'/>
                        <h1 className='lg:text-2xl md:text-xl text-lg font-black text-center hover:text-yellow-300 ease-in-out duration-300'>Loading Quiz ...</h1>
                    </div>
                )}
            </div>
        </CSSTransition>
    );
};

export default SpecificQuizBody;

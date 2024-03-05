import React, { useState, useEffect, useRef } from 'react';
import ButtonWithIcon from '../ButtonWithIcon.jsx';
import QuizCard from '../QuizCard.jsx';
import { formatDate } from '../../utils/DateUtils.js';
import { openModalDispatch } from '../../utils/ModalUtils.js';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndSetAllQuizzes } from '../../utils/QuizUtils.js';
import { Spinner } from 'flowbite-react';
import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft, FaArrowRight, FaFilter } from 'react-icons/fa';

const QuizzesPreviewBody = () => {
    const dispatch = useDispatch();
    const allQuizzes = useSelector((state) => state.quiz.allQuizzes['quiz']);
    const isQuizLoading = useSelector((state) => state.quiz.isQuizLoading);
    const [currPage, setCurrPage] = useState(0);
    const transitionRef = useRef(null);
    const isPrevButtonDisabled = currPage === 0 ;
    const isNextButtonDisabled = allQuizzes.length < 12;

    const previousPage = () => {
        if ( currPage > 0 ) {
            setCurrPage((curr) => curr - 1); 
        };
    };

    const nextPage = () => {
        if ( currPage >= 0 ) {
            setCurrPage((curr) => curr + 1); 
        }; 
    };

    useEffect(() => {
       fetchAndSetAllQuizzes(dispatch, currPage); 
    }, [dispatch, currPage]);

    return (
        <CSSTransition
            key={isQuizLoading}
            in={true}
            appear={true}
            timeout={100}
            nodeRef={transitionRef}
        >
            <div className='w-full flex flex-col items-center gap-10'>
                {(!isQuizLoading) ? (
                    <div className='w-full min-h-lvh flex flex-col justify-between fade-in-fast gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className='w-full flex justify-between items-center'>
                                <p className='text-gray-200 font-bold hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300'>Showing { allQuizzes.length } results</p>
                                <ButtonWithIcon onClickFunc={ () => openModalDispatch(dispatch, 'Filter') } text='Filter' icon={ <FaFilter className='text-gray-600'/> } />
                            </div>
                            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                {allQuizzes.map((quiz) => (
                                    <QuizCard 
                                        id={quiz._id} 
                                        author={quiz.author} 
                                        created={formatDate(quiz.createdAt)} 
                                        title={quiz.title} 
                                        description={quiz.description}
                                    />
                                ))}
                            </div>            
                        </div>
                        <div className='flex w-full gap-8 justify-center items-center mt-2'>
                            <ButtonWithIcon isDisabled={ isPrevButtonDisabled } onClickFunc={ previousPage } text='Previous' icon={ <FaArrowLeft className={ `${isPrevButtonDisabled === false ? 'text-gray-700' : 'text-white'}` } /> } /> 
                            <ButtonWithIcon isDisabled={ isNextButtonDisabled } onClickFunc={ nextPage } text='Next' icon={ <FaArrowRight className={ `${isNextButtonDisabled === false ? 'text-gray-700' : 'text-white'}` } /> } /> 
                        </div>
                    </div>
                ) : (
                    <div className='w-full flex flex-col items-center lg:gap-6 md:gap-6 gap-4 fade-in-fast'>
                        <Spinner className='lg:w-6 md:w-6 w-5 lg:h-6 md:h-6 h-5'/>
                        <h1 className='lg:text-2xl md:text-xl text-lg font-black text-center hover:text-yellow-300 ease-in-out duration-300'>Loading Quizzes ...</h1>
                    </div>
                )}
            </div>
        </CSSTransition>
    );
};

export default QuizzesPreviewBody;

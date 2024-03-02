import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAndSetAllQuizzes } from '../../utils/QuizUtils.js';
import { Spinner } from 'flowbite-react';
import ButtonWithIcon from '../ButtonWithIcon.jsx';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import QuizCard from '../QuizCard.jsx';
import { CSSTransition } from 'react-transition-group';

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
            <div className='w-full  flex flex-col items-center gap-10 pt-6'>
                {(!isQuizLoading) ? (
                    <div className='w-full min-h-lvh flex flex-col justify-between fade-in-fast'>
                        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                            {allQuizzes.map((quiz) => (
                                <QuizCard 
                                    id={quiz._id} 
                                    author={quiz.author} 
                                    created={quiz.createdAt} 
                                    title={quiz.title} 
                                    description={quiz.description}
                                />
                            ))}
                        </div>            
                        <div className='flex w-full gap-8 justify-center items-center mt-8'>
                            <ButtonWithIcon isDisabled={isPrevButtonDisabled} onClickFunc={ previousPage } text='Previous' icon={<FaArrowLeft className={ `${isPrevButtonDisabled === false ? 'text-gray-700' : 'text-white'}` } /> } /> 
                            <ButtonWithIcon isDisabled={isNextButtonDisabled} onClickFunc={ nextPage } text='Next' icon={<FaArrowRight className={ `${isNextButtonDisabled === false ? 'text-gray-700' : 'text-white'}` } /> } /> 
                        </div>
                    </div>
                ) : (
                    <div className='w-full flex flex-col items-center lg:gap-8 md:gap-8 gap-6 fade-in-fast'>
                        <Spinner />
                        <h1 className='lg:text-3xl md:text-3xl text-xl font-black text-center hover:text-yellow-300 ease-in-out duration-300'>Loading Quizzes ...</h1>
                    </div>
                )}
            </div>
        </CSSTransition>
    );
};

export default QuizzesPreviewBody;

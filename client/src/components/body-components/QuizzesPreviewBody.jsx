import { useEffect, useRef } from 'react';
import ButtonWithIcon from '../ButtonWithIcon.jsx';
import QuizCard from '../QuizCard.jsx';
import { formatDate } from '../../utils/DateUtils.js';
import { openModalDispatch } from '../../utils/ModalUtils.js';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchAndSetAllQuizzes,
    nextPage,
    prevPage,
    clearFilters
} from '../../utils/QuizUtils.js';
import { Spinner } from 'flowbite-react';
import { CSSTransition } from 'react-transition-group';
import { FaArrowLeft, FaArrowRight, FaFilter } from 'react-icons/fa';

const QuizzesPreviewBody = () => {
    const dispatch = useDispatch();
    const allQuizzes = useSelector((state) => state.quiz.allQuizzes['quiz']);
    const isQuizLoading = useSelector((state) => state.quiz.isQuizLoading);
    const isFilterApplied = useSelector((state) => state.quiz.isFilterApplied);
    const currPage = useSelector((state) => state.quiz.currPage);
    const transitionRef = useRef(null);
    const isPrevButtonDisabled = currPage === 0;
    const isNextButtonDisabled = allQuizzes.length < 12;

    const goPrevPage = () => {
        if (currPage > 0) {
            prevPage(dispatch);
        }
    };

    const goNextPage = () => {
        if (currPage >= 0) {
            nextPage(dispatch);
        }
    };

    useEffect(() => {
        fetchAndSetAllQuizzes(dispatch, currPage);
    }, []);

    return (
        <CSSTransition
            key={isQuizLoading}
            in={true}
            appear={true}
            timeout={100}
            nodeRef={transitionRef}
        >
            <div className='w-full flex flex-col items-center gap-10'>
                {!isQuizLoading ? (
                    <div className='w-full min-h-lvh flex flex-col justify-between fade-in-fast gap-6'>
                        <div className='flex flex-col gap-6'>
                            <div className='w-full flex justify-between items-center'>
                                <div>
                                    <p className='text-gray-200 font-bold hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300'>
                                        Showing {allQuizzes.length} results
                                    </p>
                                    {isFilterApplied[0] === true ? (
                                        <>
                                            <p className='mt-1.5 text-xs text-gray-200 font-bold hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 italic'>
                                                Sorting by {isFilterApplied[1]}
                                            </p>
                                            <span
                                                onClick={() =>
                                                    clearFilters(dispatch)
                                                }
                                                className='inline-block mt-1.5 text-xs text-yellow-300 underline italic font-black cursor-pointer'
                                            >
                                                Clear Filters
                                            </span>
                                        </>
                                    ) : (
                                        <p className='mt-1.5 text-xs text-gray-200 font-bold hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 italic'>
                                            No filters applied
                                        </p>
                                    )}
                                </div>
                                <ButtonWithIcon
                                    onClickFunc={() =>
                                        openModalDispatch(dispatch, 'Filter')
                                    }
                                    text='Filter'
                                    icon={
                                        <FaFilter className='text-gray-600' />
                                    }
                                />
                            </div>
                            <div className='relative w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                                {allQuizzes.length < 1 ? (
                                    <div className='absolute left-1/2 transform -translate-x-1/2 translate-y-28 flex flex-col items-center lg:gap-6 md:gap-6 gap-4 fade-in-fast'>
                                        <h1 className='font-black lg:text-3xl md:text-3xl text-2xl hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300'>
                                            No results found
                                        </h1>
                                        <p className='lg:text-base md:text-base text-sm font-light hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300'>
                                            Please refine your search
                                        </p>
                                    </div>
                                ) : (
                                    allQuizzes.map((quiz) => (
                                        <QuizCard
                                            id={quiz._id}
                                            key={quiz._id}
                                            author={quiz.author}
                                            created={formatDate(quiz.createdAt)}
                                            title={quiz.title}
                                            description={quiz.description}
                                            termsAndDefinitionsLength={
                                                quiz.termsAndDefinitions.length
                                            }
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                        <div className='flex w-full gap-8 justify-center items-center mt-2'>
                            <ButtonWithIcon
                                isDisabled={isPrevButtonDisabled}
                                onClickFunc={goPrevPage}
                                text='Previous'
                                icon={<FaArrowLeft />}
                            />
                            <ButtonWithIcon
                                isDisabled={isNextButtonDisabled}
                                onClickFunc={goNextPage}
                                text='Next'
                                icon={<FaArrowRight />}
                            />
                        </div>
                    </div>
                ) : (
                    <div className='w-full flex flex-col items-center lg:gap-6 md:gap-6 gap-4 fade-in-fast'>
                        <Spinner className='lg:w-6 md:w-6 w-5 lg:h-6 md:h-6 h-5' />
                        <h1 className='lg:text-2xl md:text-xl text-lg font-black text-center hover:text-yellow-300 ease-in-out duration-300'>
                            Loading Quizzes ...
                        </h1>
                    </div>
                )}
            </div>
        </CSSTransition>
    );
};

export default QuizzesPreviewBody;

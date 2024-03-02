import { getAllQuizzes } from '../services/QuizServiceWrapper.js'; 
import { setAllQuizzes, removeAllQuizzes, setIsQuizLoading } from '../states/QuizState.js';

export const fetchAndSetAllQuizzes = async (dispatch, currPage) => {
    dispatch(removeAllQuizzes())
    dispatch(setIsQuizLoading({isQuizLoading: true}))

    const { data } = await getAllQuizzes(currPage);
    dispatch(setAllQuizzes({ allQuizzes: data }));
    dispatch(setIsQuizLoading({isQuizLoading: false}));
};

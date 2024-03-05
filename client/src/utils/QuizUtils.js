import { getAllQuizzes } from '../services/QuizServiceWrapper.js'; 
import { setAllQuizzes, removeAllQuizzes, setIsQuizLoading, setNextPage, setPrevPage, setIsFilterApplied, setAllQuizzesBeforeFilter, revertAllQuizzesFilter } from '../states/QuizState.js';

export const fetchAndSetAllQuizzes = async (dispatch, currPage) => {
    dispatch(removeAllQuizzes())
    dispatch(setIsQuizLoading({ isQuizLoading: true }))

    const { data } = await getAllQuizzes(currPage);
    dispatch(setAllQuizzes({ allQuizzes: data }));
    dispatch(setAllQuizzesBeforeFilter({ allQuizzesBeforeFilter: data}));
    dispatch(setIsQuizLoading({ isQuizLoading: false }));
};

export const clearFilters = (dispatch) => {
    dispatch(setIsFilterApplied({ isFilterApplied: [false, ''] }));
    dispatch(revertAllQuizzesFilter());
};

export const nextPage = (dispatch) => {
    dispatch(setIsFilterApplied({ isFilterApplied: [false, ''] }));
    dispatch(removeAllQuizzes());
    dispatch(setNextPage());
};

export const prevPage = (dispatch) => {
    dispatch(setIsFilterApplied({ isFilterApplied: [false, ''] }));
    dispatch(removeAllQuizzes());
    dispatch(setPrevPage());
};

export const applyFilteredQuizzes = (dispatch, newAllQuizzes, filterType) => {
    dispatch(setIsFilterApplied({ isFilterApplied: [true, filterType] })); 
    dispatch(setAllQuizzes({ allQuizzes: newAllQuizzes }));
};

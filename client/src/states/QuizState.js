import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allQuizzesBeforeFilter: { quiz: [] },
    allQuizzes: { quiz: [] },
    specificQuiz: { quiz: {} },
    isQuizLoading: true,
    isFilterApplied: [false, ''],
    currPage: 0,
};

export const quizSlice = createSlice({
    name: "quizSlice",
    initialState,
    reducers: {
        setAllQuizzes: (state, action) => {
            state.allQuizzes = action.payload.allQuizzes;
        },
        setAllQuizzesBeforeFilter: (state, action) => {
            state.allQuizzesBeforeFilter = action.payload.allQuizzesBeforeFilter;
        },
        setSpecificQuiz: (state, action) => {
            state.specificQuiz = action.payload.specificQuiz;
        },
        setIsQuizLoading: (state, action) => {
            state.isQuizLoading = action.payload.isQuizLoading;
        },
        setNextPage: (state) => {
            state.currPage = state.currPage + 1;
        },
        setPrevPage: (state) => {
            state.currPage = state.currPage - 1;
        },
        setIsFilterApplied: (state, action) => {
            state.isFilterApplied = action.payload.isFilterApplied;
        },
        removeAllQuizzes: (state) => {
            state.allQuizzes = { quiz: [] };
            state.allQuizzesBeforeFilter = { quiz: [] };
        },
        removeSpecificQuiz: (state) => {
            state.specificQuiz = { quiz: {} };
        },
        revertAllQuizzesFilter: (state) => {
            state.allQuizzes = state.allQuizzesBeforeFilter;
        },
    },
});

export const {
    setAllQuizzes, 
    setAllQuizzesBeforeFilter,
    setSpecificQuiz, 
    setIsQuizLoading, 
    setNextPage,
    setPrevPage,
    setIsFilterApplied,
    removeSpecificQuiz, 
    removeAllQuizzes,
    revertAllQuizzesFilter,
} = quizSlice.actions;

export default quizSlice.reducer;

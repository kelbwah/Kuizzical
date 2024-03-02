import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allQuizzes: { quiz: [] },
    specificQuiz: null,
    isQuizLoading: true,
};

export const quizSlice = createSlice({
    name: "quizSlice",
    initialState,
    reducers: {
        setAllQuizzes: (state, action) => {
            state.allQuizzes = action.payload.allQuizzes;
        },
        setSpecificQuiz: (state, action) => {
            state.specificQuiz = action.payload.specificQuiz;
        },
        setIsQuizLoading: (state, action) => {
            state.isQuizLoading = action.payload.isQuizLoading;
        },
        removeAllQuizzes: (state) => {
            state.allQuizzes = { quiz: [] };
        },
        removeSpecificQuiz: (state) => {
            state.specificQuiz = null;
        },
    },
});

export const {setAllQuizzes, setSpecificQuiz, setIsQuizLoading, removeSpecificQuiz, removeAllQuizzes} = quizSlice.actions;

export default quizSlice.reducer;

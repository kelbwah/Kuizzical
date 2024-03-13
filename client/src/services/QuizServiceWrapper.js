import axios from 'axios';
import { pseudoAPICall } from "../utils/DebounceUtils";

export const getAllQuizzes = async (currPage) => { 
    await pseudoAPICall(500);
    const allQuizzes = await axios.get(`/quiz?page=${currPage}`);

    return allQuizzes;
};

export const getQuiz = async (quizId) => {
    await pseudoAPICall(500);
    const quiz = await axios.get(`/quiz/${quizId}`);

    return quiz;
};

export const createQuiz = async () => {
    await pseudoAPICall(500);
};

export const deleteQuiz = async () => {
    await pseudoAPICall(500);
};

export const updateQuiz = async () => {
    await pseudoAPICall(500);
};

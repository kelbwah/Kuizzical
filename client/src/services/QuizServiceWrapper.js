import axios from 'axios';
import { pseudoAPICall } from "../utils/DebounceUtils";

export const getAllQuizzes = async (currPage) => { 
    await pseudoAPICall(500);
    const allQuizzes = await axios.get(`/quiz?page=${currPage}`);

    return allQuizzes;
};

export const getQuiz = async () => {
    await pseudoAPICall(500);
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

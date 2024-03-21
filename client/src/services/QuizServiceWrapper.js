import axios from 'axios';
import { pseudoAPICall } from '../utils/DebounceUtils';

export const getAllQuizzes = async (currPage) => {
    await pseudoAPICall(3000);
    const allQuizzes = await axios.get(`/quiz?page=${currPage}`);

    return allQuizzes;
};

export const getQuiz = async (quizId) => {
    await pseudoAPICall(1500);
    const quiz = await axios.get(`/quiz/${quizId}`);

    return quiz;
};

export const createQuiz = async (quizForm, user) => {
    await pseudoAPICall(1500);
    const quiz = await axios.post(`/quiz?userId=${user.user._id}`, quizForm);

    return quiz;
};

export const deleteQuiz = async () => {
    await pseudoAPICall(1500);
};

export const updateQuiz = async () => {
    await pseudoAPICall(1500);
};

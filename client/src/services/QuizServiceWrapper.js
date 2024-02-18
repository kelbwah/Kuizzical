import axios from 'axios';
import { useDispatch } from "react-redux";
import { pseudoAPICall } from "../utils/DebounceUtils";

export const getAllQuizzes = async () => {
    await pseudoAPICall(2500);
};

export const getQuiz = async () => {
    await pseudoAPICall(2500);
};

export const createQuiz = async () => {
    await pseudoAPICall(2500);
};

export const deleteQuiz = async () => {
    await pseudoAPICall(2500);
};

export const updateQuiz = async () => {
    await pseudoAPICall(2500);
};

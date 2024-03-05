import axios from 'axios';
import { useDispatch } from "react-redux";
import { pseudoAPICall } from "../utils/DebounceUtils";

export const getUserById = async (userId) => {
    await pseudoAPICall(500);
    const { user } = await axios.get(`/profile/${userId}`);

    return user;
};


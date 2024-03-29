import axios from 'axios';
import { pseudoAPICall } from '../utils/DebounceUtils';

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    const data = await axios.post('/s3/upload/image', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return data;
};

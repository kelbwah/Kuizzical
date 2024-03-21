import axios from 'axios';
import { pseudoAPICall } from '../utils/DebounceUtils';

export const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('image', image);

    console.log('Stringified data: ', JSON.stringify(formData));

    const data = await axios.post('/s3/upload/image', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log('Data: ', data);

    return data;
};

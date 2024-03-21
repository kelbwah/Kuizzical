import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    error: null
};

export const errorSlice = createSlice({
    name: 'errorSlice',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload.error;
        },
        removeError: (state) => {
            state.error = null;
        }
    }
});

export const { setError, removeError } = errorSlice.actions;

export default errorSlice.reducer;

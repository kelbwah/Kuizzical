import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    success: null
};

export const successSlice = createSlice({
    name: 'successSlice',
    initialState,
    reducers: {
        setSuccess: (state, action) => {
            state.success = action.payload.success;
        },
        removeSuccess: (state) => {
            state.success = null;
        }
    }
});

export const { setSuccess, removeSuccess } = successSlice.actions;

export default successSlice.reducer;

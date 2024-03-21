import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalOpened: false,
    modalType: null
};

export const modalSlice = createSlice({
    name: 'errorSlice',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isModalOpened = true;
            state.modalType = action.payload.modalType;
        },
        closeModal: (state) => {
            state.isModalOpened = false;
            state.modalType = null;
        }
    }
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

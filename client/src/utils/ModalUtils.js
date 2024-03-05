import { closeModal, openModal } from "../states/ModalState";

export const openModalDispatch = (dispatch, modalType) => {
    dispatch(openModal({ modalType: modalType }));
};

export const closeModalDispatch = (dispatch) => {
    dispatch(closeModal()); 
};


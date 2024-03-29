import PropTypes from 'prop-types';
import { IoMdClose } from 'react-icons/io';
import { closeModalDispatch } from '../utils/ModalUtils';
import { useDispatch } from 'react-redux';

const Modal = (props) => {
    const dispatch = useDispatch();

    return (
        <div className='z-10 fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-70 fade-in-fastest'>
            <div className='z-10 flex flex-col gap-4 p-6 fixed mx-auto lg:mt-28 md:mt-28 mt-3.5 inset-0 lg:w-[650px] md:w-[650px] w-5/6 lg:h-[725px] md:h-[725px] h-[650px] fade-in-fast bg-blueWood rounded-2xl ease-in-out duration-200 overflow-y-auto'>
                <IoMdClose
                    onClick={() => closeModalDispatch(dispatch)}
                    className='text-gray-500 hover:text-gray-50 active:text-gray-400 h-6 w-6 cursor-pointer ease-in-out duration-200'
                />
                {props.innerDivComponents}
            </div>
        </div>
    );
};

Modal.defaultProps = {
    innerDivComponents: null
};

Modal.propTypes = {
    innerDivComponents: PropTypes.any
};

export default Modal;

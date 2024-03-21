import PropTypes from 'prop-types';
import { Toast } from 'flowbite-react';
import { useDispatch } from 'react-redux';
import { removeError } from '../states/ErrorState';

const CustomToast = (props) => {
    const dispatch = useDispatch();
    const removeErrorState = () => {
        dispatch(removeError());
    };

    return (
        <div className={`fixed z-50 fade-in-fast`}>
            <Toast className='flex w-full gap-1.5'>
                {props.icon}
                <div className={props.messageStyle}>{props.message}</div>
                {props.type === 'error_toast' ? (
                    <Toast.Toggle onDismiss={() => removeErrorState()} />
                ) : (
                    <Toast.Toggle />
                )}
            </Toast>
        </div>
    );
};

CustomToast.defaultProps = {
    message: null,
    icon: null,
    position: null
};

CustomToast.propTypes = {
    type: PropTypes.oneOf(['error_toast', 'congrats_toast', 'standard_toast']),
    message: PropTypes.string,
    messageStyle: PropTypes.string,
    icon: PropTypes.node,
    position: PropTypes.string,
    onClickFunction: PropTypes.func
};

export default CustomToast;

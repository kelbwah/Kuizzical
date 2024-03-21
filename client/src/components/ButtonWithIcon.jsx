import PropTypes from 'prop-types';
import { Spinner } from 'flowbite-react';

function ButtonWithIcon(props) {
    return (
        <div
            onClick={() =>
                props.isDisabled === false ? props.onClickFunc() : null
            }
            className={`box-border flex justify-center items-center gap-2 ${props.isDisabled === false ? 'bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-300 cursor-pointer' : 'bg-cyan-900 cursor-not-allowed'} ease-in-out duration-200 rounded-full lg:w-36 md:w-36 lg:h-14 md:h-14 w-28 h-12`}
        >
            {props.isLoading === false ? (
                <div className='box-border flex justify-center items-center gap-2'>
                    <span
                        className={`${props.isDisabled === false ? 'text-gray-700' : 'text-white'}`}
                    >
                        {props.icon}
                    </span>
                    <p
                        className={`${props.isDisabled === false ? 'text-gray-700 font-semibold' : 'text-white font-semibold'} text-sm select-none`}
                    >
                        {props.text}
                    </p>
                </div>
            ) : (
                <Spinner />
            )}
        </div>
    );
}

ButtonWithIcon.defaultProps = {
    icon: null,
    text: '',
    onClickFunc: () => {},
    isDisabled: false,
    isLoading: false
};

ButtonWithIcon.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    onClickFunc: PropTypes.func,
    isDisabled: PropTypes.bool,
    isLoading: PropTypes.bool
};

export default ButtonWithIcon;

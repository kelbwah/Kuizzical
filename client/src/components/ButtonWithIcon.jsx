import React from 'react';
import PropTypes from 'prop-types';

function ButtonWithIcon(props) {
    return (
        <div data-automation-id={props.automationId} onClick={() => props.isDisabled === false ? props.onClickFunc() : null} className={`box-border flex justify-center items-center gap-2 ${props.isDisabled === false ? "bg-yellow-300 hover:bg-yellow-200 active:bg-yellow-300 cursor-pointer" : 'bg-cyan-900 cursor-not-allowed'} ease-in-out duration-200 rounded-full lg:w-36 md:w-36 lg:h-14 md:h-14 w-28 h-12`}>
            {props.icon}
            <p className={`${props.isDisabled === false ? "text-gray-700 font-semibold" : 'text-white font-semibold'} text-sm`}>{props.text}</p>
        </div>
    );
}

ButtonWithIcon.defaultProps = {
    icon: null,
    text: '',
    automationId: '',
    onClickFunc: () => {},
    isDisabled: false,
};

ButtonWithIcon.propTypes = {
    icon: PropTypes.element,
    text: PropTypes.string,
    automationId: PropTypes.string,
    onClickFunc: PropTypes.func,
    isDisabled: PropTypes.bool,
};

export default ButtonWithIcon;

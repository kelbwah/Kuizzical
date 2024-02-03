import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button title={props.title} className={`${props.styles} focus:outline-none`}>
            { props.icon }
            <span className={props.labelStyles}>{props.label}</span>
        </button>
    );
};

Button.defaultProps = {
    icon: null,
    label: '',
    labelStyles: '',
    styles: '',
    title: '',
};

Button.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    title: PropTypes.string,
    labelStyles: PropTypes.string,
    styles: PropTypes.string,
};

export default Button;

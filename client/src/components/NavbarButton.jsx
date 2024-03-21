import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';

const NavbarButton = (props) => {
    const navigate = useNavigate();

    const navigateTo = (url) => {
        if (url.length > 0) {
            navigate(url);
        }
    };

    return (
        <Tooltip content={props.title}>
            <div className='flex items-center justify-center h-full'>
                <button
                    onClick={() => navigateTo(props.url)}
                    title={props.title}
                    className={`${props.styles} focus:outline-none`}
                >
                    {props.icon}
                    <span className={props.labelStyles}>{props.label}</span>
                </button>
            </div>
        </Tooltip>
    );
};

NavbarButton.defaultProps = {
    icon: null,
    label: '',
    labelStyles: '',
    styles: '',
    title: '',
    url: ''
};

NavbarButton.propTypes = {
    icon: PropTypes.node,
    label: PropTypes.string,
    title: PropTypes.string,
    labelStyles: PropTypes.string,
    styles: PropTypes.string,
    url: PropTypes.string
};

export default NavbarButton;

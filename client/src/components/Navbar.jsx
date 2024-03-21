import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaRegNoteSticky } from 'react-icons/fa6';

const Navbar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    const goToHomePage = () => {
        if (location.pathname !== '/') {
            navigate('/');
        }
    };

    return (
        <nav
            className={`flex items-center w-full lg:w-[1024px] justify-between py-6 lg:px-12 md:px-12 px-8 m-0 ${props.extraNavbarStyles}`}
        >
            <div className='flex gap-5'>
                <div className='flex gap-1.5 items-center font-black text-gray-300 select-none cursor-pointer hover:text-gray-50 hover:scale-105 active:scale-110 active:text-yellow-300 ease-in-out duration-200'>
                    <FaRegNoteSticky className='lg:text-xl md:text-xl text-base' />
                    <a
                        onClick={() => goToHomePage()}
                        className='lg:text-2xl md:text-2xl text-xl'
                    >
                        kuizzical
                    </a>
                </div>
                {props.actions.leftActions}
            </div>
            {props.actions.rightActions}
        </nav>
    );
};

Navbar.defaultProps = {
    actions: null,
    extraNavbarStyles: ''
};

Navbar.propTypes = {
    actions: PropTypes.any,
    extraNavbarStyles: PropTypes.string
};

export default Navbar;

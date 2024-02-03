import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {

    return (
        <nav className='flex items-center w-full lg:w-[1024px] justify-between pt-6 lg:px-12 md:px-12 px-8 pb-32'>
            <div className='flex gap-4'>
                <h1 className='lg:text-2xl md:text-2xl text-xl font-black text-gray-300 select-none cursor-pointer hover:text-gray-50 hover:scale-105 active:scale-110 active:text-yellow-300 ease-in-out duration-200'>kuizzical</h1>
                {props.actions.leftActions}
            </div>
            { props.actions.rightActions }
        </nav>
    );
};

Navbar.defaultProps = {
    actions: null, 
};

Navbar.propTypes = {
    actions: PropTypes.any,  
};

export default Navbar;

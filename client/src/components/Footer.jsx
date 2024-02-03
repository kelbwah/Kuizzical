import React from 'react';
import PropTypes from 'prop-types';

import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const iconStyles = 'h-7 w-7 text-gray-500 hover:text-gray-50 active:text-gray-400 ease-in-out duration-300';

const Footer = (props) => {
    return (
        <footer className='grid grid-cols-3 grid-auto-flow-column place-content-center place-items-center gap-2 pt-8 pb-12 text-gray-400'>
            <a href='https://www.github.com/kelbwah' target='_blank' className='' title='Github'><FaGithub className={iconStyles}/></a>
            <a href='https://www.linkedin.com/in/kelby-amandy-ba818a214/' target='_blank' className='' title='LinkedIn'><FaLinkedin className={iconStyles}/></a>
            <p className='text-sm'>@kaffy</p>
        </footer>
    );
};

Footer.defaultProps = {

};

Footer.propTypes = {

};


export default Footer;

import React from 'react';
import NavbarButton from './NavbarButton';

import { FaRegUser } from 'react-icons/fa';
import { MdOutlineQuiz } from 'react-icons/md';
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const iconStyles = (iconType) => {
    return (
        `${iconType === 'user' ? 'h-5 w-6' : iconType === 'quiz' ? 'h-6 w-6' : 'h-6 w-6'} text-gray-500 hover:text-gray-50 active:text-gray-400 ease-in-out duration-300`
    );
};

const userIcon = <FaRegUser className={ iconStyles('user') } />;
const quizIcon = <MdOutlineQuiz className={ iconStyles('quiz') } />;
const infoIcon = <IoMdInformationCircleOutline className={ iconStyles() } />;
const createQuizIcon = <MdOutlineCreateNewFolder className={ iconStyles() } />;

export const LeftNavbarActions = () => {
    return (
        <NavbarButton url={ '/quizzes' } title={ 'Quizzes' } icon={ quizIcon } />
    );

};

export const CenterNavbarActions = () => {

};

export const RightNavbarActions = () => {
    return (

        <div className='flex gap-7'> 
            <NavbarButton url={ '/quiz/create' } title={ 'Create Quiz' } icon={ createQuizIcon } />
            <NavbarButton url={ '/info' } title={ 'Info' } icon={ infoIcon } />
            <NavbarButton url={ '/profile' } title={ 'Profile' } icon={ userIcon } />
        </div>
    );
};

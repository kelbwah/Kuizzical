import React from 'react';
import Button from './Button';

import { FaRegUser } from 'react-icons/fa';
import { BsGear } from 'react-icons/bs';
import { MdOutlineQuiz } from "react-icons/md";

const userIconStyles = 'h-8 text-gray-500 hover:text-gray-50 active:text-gray-400 ease-in-out duration-300';
const settingsIconStyles = 'h-5 w-6 text-gray-500 hover:text-gray-50 active:text-gray-400 ease-in-out duration-300';
const quizIconStyles = 'h-5 w-6 text-gray-500 hover:text-gray-50 active:text-gray-400 ease-in-out duration-300';

const userIcon = <FaRegUser className={userIconStyles} />;
const settingsIcon = <BsGear className={settingsIconStyles} />;
const quizIcon = <MdOutlineQuiz className={quizIconStyles} />;

export const LeftNavbarActions = () => {
    return (
        <Button title={'Quizzes'} icon={quizIcon} />
    );

};

export const CenterNavbarActions = () => {

};

export const RightNavbarActions = () => {
    return (
        <div className='flex gap-7'> 
            <Button title={'Profile'} icon={userIcon} />
            <Button title={'Settings'} icon={settingsIcon} />
        </div>
    );
};

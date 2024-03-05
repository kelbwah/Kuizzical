import React from 'react';
import ButtonWithIcon from './ButtonWithIcon';
import { useSelector } from 'react-redux';
import { LuArrowDownUp } from "react-icons/lu";
import { MdFormatListNumbered } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { Checkbox } from 'flowbite-react';

const QuizFilter = () => {
    const allQuizzes = useSelector((state) => state.quiz.allQuizzes['quiz']);
    //let filteredQuizzes = null;
    const filterTextStyle = 'flex items-center gap-1 lg:text-base md:text-base text-sm font-semibold hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 select-none';

    return (
        <div className='relative py-1.5 pl-2 pr-8 mt-2 w-full h-full flex flex-col gap-8 text-white'>
            <h1 className='mb-10 lg:text-2xl md:text-2xl text-xl font-black hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 select-none'>Result Filters</h1>  
            <div className='flex flex-col gap-20'>
                <div className='flex justify-between'> 
                    <p className={ filterTextStyle }>
                        A-Z (alphabetical order)
                        <span className='inline-block'>
                            <LuArrowDownUp />
                        </span>
                    </p>
                    <Checkbox />
                </div>
                <div className='flex justify-between'> 
                    <p className={ filterTextStyle }>
                       Term length 
                        <span className='inline-block'>
                            <MdFormatListNumbered />
                        </span>
                    </p>
                    <Checkbox />
                </div>
                <div className='flex justify-between'> 
                    <p className={ filterTextStyle }>
                       Upload date 
                        <span className='inline-block'>
                            <IoCalendarNumber />
                        </span>
                    </p>
                    <Checkbox />
                </div>
            </div>
            <div className='absolute bottom-0 right-0 pr-4 pb-4'>
                <ButtonWithIcon text='Apply' />
            </div>
        </div>
    );
};

export default QuizFilter;


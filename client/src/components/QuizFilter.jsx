import React, { useState } from 'react';
import ButtonWithIcon from './ButtonWithIcon';
import { useDispatch, useSelector } from 'react-redux';
import { LuArrowDownUp, LuArrowUpDown } from "react-icons/lu";
import { MdFormatListNumbered } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { RxUpdate } from "react-icons/rx";
import { Checkbox } from 'flowbite-react';
import { applyFilteredQuizzes } from '../utils/QuizUtils';
import { closeModalDispatch } from '../utils/ModalUtils';

const QuizFilter = () => {
    const filterTextStyle = 'flex items-center gap-1 lg:text-base md:text-base text-sm font-semibold hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 select-none';
    const defaultFilters = {
        'highAlphabet': false, 
        'lowAlphabet': false, 
        'highTermLength': false, 
        'lowTermLength': false, 
        'newUploadDate': false, 
        'oldUploadDate': false, 
        'newUpdateDate': false,
        'oldUpdateDate': false,
    };
    const dispatch = useDispatch();
    const immutableAllQuizzesBeforeFilter = useSelector((state) => state.quiz.allQuizzesBeforeFilter['quiz']);
    const allQuizzesBeforeFilter = [...immutableAllQuizzesBeforeFilter];
    const [selectedFilters, setSelectedFilters] = useState(defaultFilters);

    const updateFilter = (filterType) => {
        setSelectedFilters(prev => { 
            return { 
                ...defaultFilters,
                [`${filterType}`]: !prev[filterType],
            };
        });
    };

    const resetFilters = () => {
        setSelectedFilters(defaultFilters);
    };

    const applyFilter = () => { 
        const trueFilter = Object.keys(selectedFilters).find((key) => selectedFilters[key] === true);
        if (trueFilter) {
            let filteredQuizzes = null;
            let filter = null;
            switch (trueFilter) {
                case 'lowAlphabet':
                    filteredQuizzes = allQuizzesBeforeFilter.sort((a, b) => a.title.localeCompare(b.title));
                    filter = 'A-Z';
                    break;
                case 'highAlphabet':
                    filteredQuizzes = allQuizzesBeforeFilter.sort((a, b) => b.title.localeCompare(a.title));
                    filter = 'Z-A';
                    break;
                case 'highTermLength':
                    filteredQuizzes = allQuizzesBeforeFilter.sort((a, b) => b.termsAndDefinitions.length - a.termsAndDefinitions.length);
                    filter = 'Term Length (High to Low)';
                    break;
                case 'lowTermLength':
                    filteredQuizzes = allQuizzesBeforeFilter.sort((a, b) => a.termsAndDefinitions.length - b.termsAndDefinitions.length);
                    filter = 'Term Length (Low to High)';
                    break;
                case 'newUploadDate':
                    filteredQuizzes = allQuizzesBeforeFilter.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                    filter = 'Upload Date (New to Old)';
                    break;
                case 'oldUploadDate':
                    filteredQuizzes = allQuizzesBeforeFilter.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
                    filter = 'Upload Date (Old to New)';
                    break;
                case 'newUpdateDate':
                    filteredQuizzes = allQuizzesBeforeFilter.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
                    filter = 'Update Date (New to Old)';
                    break;
                case 'oldUpdateDate':
                    filteredQuizzes = allQuizzesBeforeFilter.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
                    filter = 'Update Date (Old to New)';
                    break;
            };
            applyFilteredQuizzes(dispatch, { quiz: filteredQuizzes }, filter); 
            closeModalDispatch(dispatch);
        };
    };

    const FilterElement = ({ text, icon, filterType }) => {
        return (
            <div className='flex justify-between'> 
                <p className={ filterTextStyle }>
                    { text } 
                    <span className='inline-block'>
                        { icon } 
                    </span>
                </p>
                <Checkbox checked={ selectedFilters[filterType] } onChange={ () => updateFilter(filterType) }/>
            </div>
        );
    };

    return (
        <div className='relative py-1.5 pl-1.5 pr-1.5 mt-2 w-full h-full flex flex-col gap-8 text-white fade-in-fastest'>
            <h1 className='mb-2 lg:text-3xl md:text-3xl text-2xl font-black hover:text-yellow-300 active:text-yellow-400 ease-in-out duration-300 select-none'>Result Filters</h1>  
            <div className='flex flex-col gap-8'>
                <FilterElement text='A-Z (alphabetical order)' icon={ <LuArrowDownUp /> } filterType='lowAlphabet'/> 
                <FilterElement text='Z-A (reverse order)' icon={ <LuArrowUpDown /> } filterType='highAlphabet'/> 
                <FilterElement text='Term length (high to low)' icon={ <MdFormatListNumbered /> } filterType='highTermLength'/> 
                <FilterElement text='Term length (low to high)' icon={ <MdFormatListNumbered /> } filterType='lowTermLength'/> 
                <FilterElement text='Upload date (new to old)' icon={ <IoCalendarNumber /> } filterType='newUploadDate'/> 
                <FilterElement text='Upload date (old to new)' icon={ <IoCalendarNumber /> } filterType='oldUploadDate'/> 
                <FilterElement text='Update date (new to old)' icon={ <RxUpdate /> } filterType='newUpdateDate'/> 
                <FilterElement text='Update date (old to new)' icon={ <RxUpdate /> } filterType='oldUpdateDate'/> 
            </div>
            <div className='absolute bottom-0 right-0'>
                <ButtonWithIcon text='Apply' onClickFunc={ applyFilter }/>
            </div>
            <div className='absolute bottom-0 left-0'>
                <ButtonWithIcon text='Reset' onClickFunc={ resetFilters }/>
            </div>
        </div>
    );
};

export default QuizFilter;

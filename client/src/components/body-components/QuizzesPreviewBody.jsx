import React, { useState, useEffect } from 'react';
import { getAllQuizzes } from '../../services/QuizServiceWrapper.js'; 

const QuizzesPreviewBody = () => {
    let allQuizzes = null;

    useEffect(() => {
         
    }, [allQuizzes]);

    return (
        <div className='w-full h-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
            {allQuizzes ? (
                <div>
                Some quizzes!
                </div>            
            ) : (
                <div>
                Nothing to see here!
                </div>
            )}
        </div>
    );
};

export default QuizzesPreviewBody;

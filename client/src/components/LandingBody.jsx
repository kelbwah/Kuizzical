import React from 'react';

const LandingBody = () => {
    return (
        <div className='flex flex-col gap-4 select-none pb-40 my-auto'>
            <p className='font-black lg:text-4xl md:text-4xl text-2xl hover:text-yellow-300 ease-in-out duration-300'>Let's get started</p>
            <p className='lg:text-sm md:text-sm text-xs'>Press the quiz button above to <span className='text-yellow-300'>search</span> through quizzes</p>
            <p className='lg:text-sm md:text-sm text-xs'>Or press the profile button to start <span className='text-yellow-300'>creating</span> quizzes</p>
        </div>
    );
};

export default LandingBody;

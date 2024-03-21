const LandingBody = () => {
    return (
        <div className='flex flex-col justify-center text-center fade-in-fast'>
            <p className='text-center font-black lg:text-4xl md:text-4xl text-3xl mb-4 hover:text-yellow-300 ease-in-out duration-300'>
                Let's get started
            </p>
            <p className='text-center lg:text-sm md:text-sm text-xs mb-2'>
                Press the quiz button above to
                <span className='text-yellow-300'>search</span> through quizzes
            </p>
            <p className='text-center lg:text-sm md:text-sm text-xs'>
                Or press the profile button to start
                <span className='text-yellow-300'>creating</span> quizzes
            </p>
        </div>
    );
};

export default LandingBody;

import React from 'react';

const InfoBody = () => {
    return (
        <>
            <div className='flex flex-col gap-12 items-center fade-in-fast'>
                <div className='flex flex-col gap-3'>
                    <h1 className='font-black lg:text-4xl md:text-4xl text-3xl pb-2 hover:text-yellow-300 ease-in-out duration-300'>What is Kuizzical?</h1>
                    <p className='lg:text-sm md:text-sm text-xs font-medium'>
                        Kuizzical was made <span className='text-yellow-300'>simplicity</span> and for you to get the grades you deserve. You are able to study however <span className='text-yellow-300'>you</span> like. Whether it be fun games we generate for you or flashcards, we have it all.
                        Kuizzical was meant to remove the need for any subscription based services like other competing quiz/studying SaaS's.<br/><br/>So, in essence, we've taken the best of all competing products into 
                        one product called Kuizzical. Now, no AI microservices/features have been implemented yet. I know, it's 2024 and it should be standard. But maybe in the future, or with the help of other developers, it can happen. 
                    </p>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-black lg:text-4xl md:text-4xl text-3xl pb-2 hover:text-yellow-300 ease-in-out duration-300'>FAQ</h1>
                    <div className='flex flex-col gap-3'>
                        <p className='lg:text-base md:text-base text-sm font-bold'>Is Kuizzical free?</p>
                        <p className='text-xs'>Yes! Kuizzical is 100% free, no subscriptions or any premium features, what you see is what you get!</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='lg:text-base md:text-base text-sm font-bold'>Do I need to make an account to use Kuizzical?</p>
                        <p className='text-xs'>No need! You are able to view and search through any quiz you please and use all it's features! The only time you'll need to make an account is when you want to create your own quiz.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='lg:text-base md:text-base text-sm font-bold'>I found a glitch/bug, where can I make a issue for this?</p>
                        <p className='text-xs'>Kuizzical is open source and it's source code is found in <a className='text-yellow-300 underline' href='https://github.com/kelbwah/Kuizzical.git' target='_blank'>GitHub!</a> Any contributing or issue guidelines are in that github link!</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p className='lg:text-base md:text-base text-sm font-bold'>Why use Kuizzical?</p>
                        <p className='text-xs'>Kuizzical is the culmination of having used other quiz SaaS's and taking the best of all of them. All without the need of paying for any subscription to attain so-called "premium features".</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InfoBody;

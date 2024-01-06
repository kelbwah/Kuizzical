import React from "react";

export default function LandingBody(){
    return (
        <React.Fragment>
            <div className="flex flex-col w-screen h-screen items-center gap-4 lg:pt-28 md:pt-28 pt-32 overflow-y-auto">
                <p className="text-center lg:mt-28 md:mt-28 mt-16 lg:px-0 md:px-0 px-4 font-extrabold lg:text-5xl md:text-5xl text-4xl text-gray-700">Get the grades <span className="text-yellow-500">you</span> deserve</p> 
                <p className="items-center justify-center xl:w-2/5 lg:w-1/3 w-2/3 text-center font-semibold mt-1">
                  With Kuizzical's innovative study features, you won't 
                  ever have to worry about whether you will ace that test or not.
                  Kuizzical will always have your back throughout your study journey.
                </p>
                <button className="lg:text-lg md:text-lg text-md bg-yellow-400 rounded-xl px-8 py-5 hover:bg-yellow-500 active:bg-yellow-600 ease-in-out duration-200 font-medium mt-2">Sign up now</button> 
            </div>
        </React.Fragment>
    )
}

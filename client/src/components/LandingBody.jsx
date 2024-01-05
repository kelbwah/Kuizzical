import React from "react";
import exam_paper_image from "../assets/exam_paper_image.jpeg";

export default function LandingBody(){
    return (
        <React.Fragment>
            <div className="flex flex-col w-screen h-screen items-center gap-4 lg:mt-28 md:mt-28 mt-32 overflow-y-auto">
                <p className="text-center lg:mt-28 md:mt-28 mt-16 lg:px-0 md:px-0 px-4 font-extrabold lg:text-5xl md:text-5xl text-4xl text-gray-700">Get the grades <span className="text-yellow-500">you</span> deserve</p> 
                <p className="items-center justify-center xl:w-2/5 lg:w-1/3 w-2/3 text-center font-semibold mt-1">
                  With Kuizzical's innovative study features, you won't 
                  ever have to worry about whether you will ace that test or not.
                  Kuizzical will always have your back throughout your study journey.
                </p>
                <button className="lg:text-lg md:text-lg text-md bg-yellow-400 rounded-xl px-8 py-5 hover:bg-yellow-500 active:bg-yellow-600 ease-in-out duration-200 font-medium mt-2">Sign up now</button> 
                <div className="flex w-full justify-center mt-8 py-32 rounded-sm">
                  <div className="flex flex-col lg:w-450 md:w-450 w-350 justify-between gap-4">
                    <div className="flex flex-col gap-8">
                      <p className="font-extrabold lg:text-3xl md:text-3xl text-2xl text-gray-700">Don't know where to start?</p>
                      <p className="w-1/2">
                        Kuizzical has got your back! You can view and use other user's 
                        public practice sets or make your own! Press the button below              
                        to get started!
                      </p>
                    </div>
                    <button className="lg:w-1/2 md:w-1/2 w-full lg:text-lg md:text-lg text-md bg-yellow-400 rounded-xl px-8 py-5 hover:bg-yellow-500 active:bg-yellow-600 ease-in-out duration-200 font-medium mt-2">Practice Quizzes</button>
                  </div>
                  <img className="lg:w-375 md:w-375 w-225 lg:h-300 md:h-300 h-225 rounded-lg shadow-xl" src={exam_paper_image} alt="Image by upklyak on Freepik"/>
                </div>
            </div>
        </React.Fragment>
    )
}

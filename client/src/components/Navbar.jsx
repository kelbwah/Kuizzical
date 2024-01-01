import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import React from 'react';
import AppLogo from "./AppLogo";
import SearchBar from "./SearchBar";

// TODO: Make it so that the Search Bar goes all the way down to the bottom on smaller screens 
// TOOD: also add in login and sign up buttons as well

export default function Navbar(props){
    return (
        <React.Fragment>
            <div className="flex flex-col w-screen items-center justify-center bg-slate-200">
                <nav className="flex w-full justify-between lg:px-12 md:px-12 px-8 lg:pt-2 md:pt-2 pt-4 pb-2 bg-slate-200 items-center"> 
                    <AppLogo isClickable={true} /> 
                    <div className="lg:flex md:flex hidden">
                        <SearchBar />
                    </div>
                    <div className="flex lg:gap-8 md:gap-8 gap-4">
                        <button onClick="" className="lg:text-sm md:text-sm text-xs bg-yellow-400 rounded-xl px-5 py-3 hover:bg-yellow-500 active:bg-yellow-600 ease-in-out duration-200 font-medium">Log in</button>
                        <button onClick="" className="lg:text-sm md:text-sm text-xs text-sm bg-yellow-400 rounded-xl px-4 py-3 hover:bg-yellow-500 active:bg-yellow-600 ease-in-out duration-200 font-medium">Sign up</button>
                    </div>
                </nav>
                <div className="lg:hidden md:hidden flex w-full px-6 pb-2">
                    <SearchBar />
                </div>
            </div>
        </React.Fragment>
    )
}


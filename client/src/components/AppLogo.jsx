import React from "react";

export default function AppLogo({isClickable}){
    return (
        <React.Fragment>
            <h1 className={`${isClickable ? "cursor-pointer select-none" : "" } lg:flex md:hidden hidden font-extrabold text-3xl text-blue-400`}>Kuizzical</h1>
            <h1 className={`${isClickable ? "cursor-pointer select-none" : "" } lg:hidden md:flex flex font-extrabold text-3xl text-blue-400`}>K</h1>
        </React.Fragment>
    )
}
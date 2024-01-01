import React from 'react';
import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

/* 
TODO: Make this a bit better by making text smaller for small screens

      (might have to use react-flowbite again for inputs to make it easier
      so look at the documentation from UTrade)

*/

export default function SearchBar(){
    let [testValue, setTestValue] = useState("");

    return (
        <React.Fragment>
            <div className="flex items-center p-1 lg:w-300 md:w-300 w-full">
                <input onChange={(e) => setTestValue(e.target.value)} value={ testValue } placeholder="Look for anything" className="text-sm py-3 pl-14 pr-6 rounded-full bg-gray-100 text-gray-800 border-2 border-gray-500 w-full"/>
                <CiSearch className="absolute w-4 h-4 font-semibold text-gray-600 translate-x-6" />
            </div>
        </React.Fragment>
    )
}
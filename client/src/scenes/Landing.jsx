import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import Navbar from '../components/Navbar';
import LandingBody from '../components/LandingBody';

export default function Landing(){
    return (
        <React.Fragment>
            <div className="flex flex-col w-screen h-screen">
                <Navbar />
                <LandingBody />
            </div>
        </React.Fragment>
    )
}

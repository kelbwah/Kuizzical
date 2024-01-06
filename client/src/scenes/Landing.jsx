import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import Navbar from '../components/Navbar';
import LandingBody from '../components/LandingBody';
import Footer from '../components/Footer';

export default function Landing(){
    return (
        <React.Fragment>
            <div className="flex flex-col justify-between w-screen h-screen">
                <Navbar />
                <LandingBody />
                <Footer />
            </div>
        </React.Fragment>
    )
}

import React from 'react';
import Navbar from '../components/Navbar.jsx';
import LandingBody from '../components/LandingBody.jsx'; 
import Footer from '../components/Footer.jsx';

import { RightNavbarActions, LeftNavbarActions } from '../components/NavbarActions.jsx';

const Landing = () => {

    return (
        <div className='flex flex-col items-center w-screen h-screen text-gray-300'>
            <Navbar actions={ 
                    {
                        leftActions: <LeftNavbarActions />, 
                        rightActions: <RightNavbarActions />,
                    } 
                }
            /> 
            <LandingBody />
            <Footer />
        </div>
    );
};

export default Landing;

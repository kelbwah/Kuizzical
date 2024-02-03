import React from 'react';
import Navbar from '../components/Navbar.jsx';
import { RightNavbarActions, LeftNavbarActions } from '../components/NavbarActions.jsx';

const Landing = () => {

    return (
        <div className='w-screen h-screen bg-shark'>
            <Navbar actions={ 
                    {
                        leftActions: <LeftNavbarActions />, 
                        rightActions: <RightNavbarActions />,
                    } 
                }
            /> 
        </div>
    );
};

export default Landing;

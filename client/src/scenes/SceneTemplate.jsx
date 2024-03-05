import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CustomToast from '../components/CustomToast.jsx';
import PropTypes from 'prop-types';
import BodyComponent from '../components/body-components/BodyComponent.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import LandingBody from '../components/body-components/LandingBody.jsx'; 
import ProfileBody from '../components/body-components/ProfileBody.jsx';
import InfoBody from '../components/body-components/InfoBody';
import QuizzesPreviewBody from '../components/body-components/QuizzesPreviewBody.jsx';
import SpecificQuizBody from '../components/body-components/SpecificQuizBody.jsx';
import Modal from '../components/Modal.jsx';
import QuizFilter from '../components/QuizFilter.jsx';

import { RightNavbarActions, LeftNavbarActions } from '../components/NavbarActions.jsx';

const sceneTypes = {
    'Landing': <LandingBody />,
    'Profile': <ProfileBody />,
    'Info': <InfoBody />,
    'QuizzesPreview': <QuizzesPreviewBody />,
    'SpecificQuiz': <SpecificQuizBody />,
};

const modalTypes = {
    'Filter': <QuizFilter />,
};

const SceneTemplate = (props) => { 
    document.title = props.documentTitle;
    const error = useSelector((state) => state.error.error);    
    const success = useSelector((state) => state.success.success);
    const modal = useSelector((state) => state.modal);

    return (
        <>
            {error !== null && (
                <CustomToast message={error} type={ 'error_toast' }/>
            )}
            {success !== null && (
                <CustomToast message={success} type={ 'success_toast' }/>
            )}
            {modal.isModalOpened !== false && (
                <Modal innerDivComponents={ modalTypes[modal.modalType] }/>
            )}
            <div className='relative flex flex-col items-center w-screen min-h-screen text-gray-300 fade-in-fast'>
                <Navbar 
                    actions={ 
                        {
                            leftActions: <LeftNavbarActions />, 
                            rightActions: <RightNavbarActions />,
                        } 
                    }
                /> 
                <BodyComponent innerDivComponents={ sceneTypes[props.sceneType] } />
                <Footer />
            </div>
        </>
    );
};

SceneTemplate.defaultProps = {
    documentTitle: '',
    sceneType: '',
};

SceneTemplate.propTypes = {
    documentTitle: PropTypes.string,
    sceneType: PropTypes.string,
};

export default SceneTemplate;

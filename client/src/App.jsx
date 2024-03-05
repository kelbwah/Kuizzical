import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import axios from 'axios';
import SceneTemplate from './scenes/SceneTemplate.jsx';


function App() {
    axios.defaults.baseURL = 'http://localhost:6969/api';
    axios.defaults.withCredentials = true;

    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route 
                    exact
                    path='/' 
                    element={
                        <SceneTemplate documentTitle='Home' sceneType='Landing' />
                    }
                />
                <Route 
                    path='/profile' 
                    element={
                        <SceneTemplate documentTitle='Profile' sceneType='Profile' />
                    }
                />
                <Route 
                    path='/info'
                    element={
                        <SceneTemplate documentTitle='Info' sceneType='Info' />
                    }
                />
                <Route
                    path='/quizzes'
                    element={
                        <SceneTemplate documentTitle='Quizzes' sceneType='QuizzesPreview' />       
                    }
                />
                <Route
                    path='/quiz/:quizId'
                    element={
                        <SceneTemplate documentTitle='Quiz' sceneType='SpecificQuiz' />
                    }
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App;

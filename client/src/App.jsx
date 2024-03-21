import { Routes, Route, BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import SceneTemplate from './scenes/SceneTemplate.jsx';

function App() {
    axios.defaults.baseURL = 'https://kuizzical-prod-api.vercel.app/api';

    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route
                    exact
                    path='/'
                    element={
                        <SceneTemplate
                            documentTitle='Home'
                            sceneType='Landing'
                        />
                    }
                />
                <Route
                    path='/profile'
                    element={
                        <SceneTemplate
                            documentTitle='Profile'
                            sceneType='Profile'
                        />
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
                        <SceneTemplate
                            documentTitle='Quizzes'
                            sceneType='QuizzesPreview'
                        />
                    }
                />
                <Route
                    path='/quiz/create'
                    element={
                        <SceneTemplate
                            documentTitle='Create Quiz'
                            sceneType='CreateQuiz'
                        />
                    }
                />
                <Route
                    path='/quiz/:quizId'
                    element={
                        <SceneTemplate
                            documentTitle='Quiz'
                            sceneType='SpecificQuiz'
                        />
                    }
                />
                <Route
                    path='/quiz/:quizId/flashcards'
                    element={
                        <SceneTemplate
                            documentTitle='Flashcards'
                            sceneType='Flashcards'
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

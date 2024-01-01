import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Landing from './scenes/Landing.jsx';
import LoginAndRegister from './scenes/LoginAndRegister.jsx';
import ProfilePage from './scenes/ProfilePage.jsx';
import Quizzes from './scenes/Quizzes.jsx';
import SpecificQuiz from './scenes/SpecificQuiz.jsx';
import CreateQuiz from './scenes/CreateQuiz.jsx';
import Error from './scenes/Error.jsx';
import './index.css';


export default function App() {

  axios.defaults.baseURL = 'http://localhost:3001/api';
  axios.defaults.withCredentials = true;

  const isAuth = Boolean(useSelector((state) => state.token));
  const user = useSelector((state) => state.user);
  
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route
          path = '/'
          element = { <Landing/> }
        />
        <Route
          path = 'signup'
          element = { !isAuth ? <LoginAndRegister /> : <Quizzes /> }
        />
      </Routes>
    </BrowserRouter>
  )
};


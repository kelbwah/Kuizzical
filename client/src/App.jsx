//import { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import dotenv from 'dotenv';
import axios from 'axios';
import Landing from './scenes/Landing.jsx';

dotenv.config();

function App() {

  axios.defaults.baseURL = process.env.VITE_API_BASE_URL;
  axios.defaults.withCredentials = true;
 
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route 
          path="/" 
          element={
            <Landing />
          }>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

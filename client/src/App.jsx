//import { useEffect, useState } from 'react';
//import { useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import axios from 'axios';
import Landing from './scenes/Landing.jsx';


function App() {

  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
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

import React from 'react';
import Login from './routes/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import Signup from './routes/Signup.jsx';
import Home from './routes/Home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/signin' element={<Login/>}/> 
      <Route path='/signup' element={<Signup/>}/> 

    </Routes>
  )
}

export default App
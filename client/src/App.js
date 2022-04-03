import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Edit from './pages/Edit/Edit';
import Header from './pages/Header/Header';
import Home from './pages/HomePage/Home';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <ToastContainer/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/edit/:id" element={<Edit />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home';
import LandingPage from './components/LandingPage';
import PostForm from './components/PostView';

function App() {
  return (
    <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/Form" element={<PostForm/>} />
                  </Routes>
            </BrowserRouter>
  );
}

export default App;
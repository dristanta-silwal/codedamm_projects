import React from "react"

import { Route, Routes, Navigate } from 'react-router-dom'

import Home from "./constants/Home";
import Navbar from "./constants/Navbar/Navbar";
import Footer from "./constants/Footer/Footer";

import Counter from "./containers/Counter";
import FAQ from "./containers/FAQ/FAQ";
import Quiz from "./containers/Quiz";
import ToDo from "./containers/ToDo";

import './index.css'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Counter' element={<Counter />} />
        <Route exact path='/FAQ' element={<FAQ />} />
        <Route exact path='/Quiz' element={<Quiz />} />
        <Route exact path='/ToDo' element={<ToDo />} />
        <Route path="*" element={<Navigate to="/" replace />}/>
    </Routes>
    <Footer />
    </>
  );
}

export default App;

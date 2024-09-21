import './App.scss';
import Layout from "../src/components/Layout/index.js"
import {Routes, Route} from "react-router-dom";
import Home from './components/Home/index.js';
import About from './components/About/index.js';
import Contact from './components/Contact/index.js';
import Experience from './components/Experience/Experience.jsx';
import React from 'react';
import Skills from './components/Skills/Skills.jsx';
import Projects from './components/Projects/Projects.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          
        </Route>
      </Routes>
    </>
  );
}

export default App;

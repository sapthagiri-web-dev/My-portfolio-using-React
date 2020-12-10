
import React from 'react';
import Calender from './Components/Calender'
import './App.css'
import Main from './Components/Main'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Footer from './Components/Footer'





function App() {


  return (
    
    <div className="container">
    <Calender />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Footer />
    
    </div>

  
  );
}

export default App;

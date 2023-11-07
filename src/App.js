import './App.css';
import {HashRouter as Router, Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import ProjectsPage from './pages/Projects'
import ProjectSpecificPage from './pages/ProjectSpecific'
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar'
import {useLocation} from 'react-router-dom';
import Foot from './components/Footer';

export function Checky() {
  const {pathname} = useLocation();
  var toShow = true;
  useEffect(() => {
    if (pathname.includes('/login')) {
        console.log('1');
    } else {
        console.log('2');
    };
  });
}

function App() {
  /* navbar toggle logic */
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  var navState = true
  if (window.location.href.substring(window.location.href.lastIndexOf('/')+1)) {
    navState = false
  } else {
    navState = true
  };

  const [isScroll, setIsScroll] = useState(navState);

  window.onload = function() {
    console.log('loaded')
  }

  window.onchange = function() {
    console.log('changed')
  }

  const toggleNavButtonsType = (setType) => {
    setIsScroll(setType);
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <NavBar toggle={toggle} isScroll={isScroll} toggleNavButtonsType={toggleNavButtonsType}/>
      <Routes>
        <Route exact path="/" element={<HomePage toggleNavButtonsTypeHome={toggleNavButtonsType}/>} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/projects" element={<ProjectsPage />} />
        <Route exact path="/projects/project/:id" element={<ProjectSpecificPage />} />
      </Routes>
      <Foot></Foot>
    </Router>
  );
}

export default App;

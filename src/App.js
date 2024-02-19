import './App.css';
import Header from './components/header/Header';
import Intro from './components/intro/Intro';
import Projects from './components/showcase/Projects';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { useRef } from 'react';
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function App() {
  const projectsReference = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className="App">
      <Header projectsRef={projectsReference} aboutRef={aboutRef}/>
      <Intro/>
      <Projects ref={projectsReference}/>
      <About ref={aboutRef}/>
      <Footer/>
    </div>
  );
}

export default App;

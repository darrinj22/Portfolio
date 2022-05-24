import './App.scss';
import TopBar from './components/TopBar/TopBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume'; 
import { useState, useEffect, useRef } from 'react'; 
import Menu from './components/menu/Menu';
import Intro from './components/Intro/Intro';
import Skills from './components/Skills/Skills';
import useOnScreen from './hooks/useOnScreen';

function App() {

  const [menuOpen,setMenuOpen] = useState(false);
  const targetRef = useRef(null);
  const isVisible = useOnScreen({
    root: null,
    rootMargin: '0px',
    threshold: 0.9
  }, targetRef)

  useEffect ( () => {
    console.log(isVisible);
  },[isVisible])

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} changingbg={isVisible ? 'transparent' : '#264653'}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

      <div className="sections">
      <br ref={targetRef}/>
        <Intro></Intro>
        <About></About>
        <Skills />
        <Projects />
        <Contact />
        
      </div> 

    </div>
  );
}

export default App;

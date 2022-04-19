import './App.scss';
import TopBar from './components/TopBar/TopBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume'; 
import { useState } from 'react'; 
import Menu from './components/menu/Menu';
import Intro from './components/Intro/Intro';

function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </div> 
    </div>
  );
}

export default App;

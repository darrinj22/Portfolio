import './App.scss';
import TopBar from './components/TopBar/TopBar';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume'; 

function App() {
  return (
    <div className="app">
      <TopBar />
      <div className="sections">
        <Contact />
        <About />
        <Projects />
        <Resume />
      </div> 
    </div>
  );
}

export default App;

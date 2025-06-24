import './App.css';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './components/projects';
import Experience from './components/experience';
import ExtraCurricular from './components/ExtraCurricular';

function App() {
  return (
    <div className="App">
     <Intro />
     <Skills />
     <Experience />
     <Projects />
     <ExtraCurricular />
    </div>
  );
}

export default App;

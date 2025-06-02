import './App.css';
import Intro from './components/intro';
import Skills from './components/skills';
import Projects from './projects';
import Experience from './components/experience';

function App() {
  return (
    <div className="App">
     <Intro />
     <Skills />
     <Experience />
     <Projects />
    </div>
  );
}

export default App;

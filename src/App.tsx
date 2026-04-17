import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CosmicBackground from './components/Cosmicbackground';

function App() {
  return (
    <div style={{border: 'none'}}>
      <Navigation />
      <main>
        <div id="home">
          <CosmicBackground>
            <Hero />
          </CosmicBackground>
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

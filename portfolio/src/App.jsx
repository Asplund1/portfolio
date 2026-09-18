import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="site-shell">
        <Navbar />

        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>

        <footer className="footer">
          <span>Andreas Asplund</span>
          <span>Fullstack Developer · Stockholm</span>
        </footer>
      </div>
    </>
  );
}

export default App;

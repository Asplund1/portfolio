import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import GlobalStyles from "./styles/GlobalStyles";
import { Footer, Shell } from "./styles/layout";

function App() {
  return (
    <>
      <>
        <GlobalStyles />
        <Shell>
        <Navbar />

        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <About />
          <Contact />
        </main>

        <Footer>
          <span>Andreas Asplund</span>
          <span>Fullstack Developer · Stockholm</span>
        </Footer>
        </Shell>
      </>
    </>
  );
}

export default App;

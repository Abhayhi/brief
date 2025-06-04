import React from 'react';
import Header from './components/Header';
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Certifications from './components/Certifications'
import SideTextAnimation from './components/SideTextAnimation'
import AnimatedCursor from "./components/AnimatedCursor";

const App = () => {
  return (
    <div className="font-sans">
      <style>{`
  body {
    background: linear-gradient(135deg, #6A89A7 0%, #88BDF2 50%, #BDDDFC 100%);
    min-height: 100vh;
    margin: 0;
    color: #BDDDFC; /* light gray text for good contrast */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  }
`}</style>
      <AnimatedCursor />
      <SideTextAnimation />
      <Header />
      <main > {/* Padding for fixed Header */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;

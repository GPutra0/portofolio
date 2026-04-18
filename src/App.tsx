import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Organizational from "./components/Organizational";
import Footer from "./components/Footer";
import BackgroundEffect from "./components/BackgroundEffect";

export default function App() {
  return (
    <div className="min-h-screen bg-premium-black selection:bg-brand-coral selection:text-white overflow-x-hidden">
      <BackgroundEffect />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Organizational />
      </main>
      <Footer />
    </div>
  );
}


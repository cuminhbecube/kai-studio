import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ZaloButton from './components/ZaloButton';
import ProjectKhachHang1 from './components/ProjectKhachHang1';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
  <ProjectKhachHang1 />
        <Contact />
      </main>
      <Footer />
  <ZaloButton />
    </div>
  );
}

export default App;

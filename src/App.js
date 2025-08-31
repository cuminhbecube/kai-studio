import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutServices from './components/AboutServices';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ZaloButton from './components/ZaloButton';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const { pathname } = useLocation();
  const hideHeader = pathname.startsWith('/du-an');
  return (
    <div>
      {!hideHeader && <Header />}
      <main>
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Hero />
                <AboutServices />
                <Projects />
                <Contact />
              </>
            )}
          />
          <Route path="/du-an/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
  {!hideHeader && <Footer />}
      <ZaloButton />
    </div>
  );
}

export default App;

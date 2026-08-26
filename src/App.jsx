import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
function App() {
  const pages = {
    '/': Hero,
    '/about': About,
    '/skills': Skills,
    '/projects': Projects,
    '/education': Education,
    '/contact': Contact,
  };

  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => setPath(window.location.pathname);

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, '', nextPath);
    setPath(nextPath);
  };

  const CurrentPage = pages[path] || pages['/'];

  return (
    <>
      <Navbar onNavigate={navigate} />
      <main className="page-main"><CurrentPage onNavigate={navigate} /></main>
      <Footer />
    </>
  );
}

export default App;
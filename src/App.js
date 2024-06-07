import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Work from './components/Work';

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

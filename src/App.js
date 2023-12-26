import './App.css';
import About from './Components/About';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Work from './Components/Work';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Work />
      <Blogs />
      <Contact />
    </div>
  );
}

export default App;

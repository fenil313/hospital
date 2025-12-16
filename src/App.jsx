import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './componets/Header';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Doctor from './pages/Doctor';
import Contact from './pages/Contact';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Service />
      <Doctor />
      <Contact />
     <Footer />
    </div>
  );
}

export default App;
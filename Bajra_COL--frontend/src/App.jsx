import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { About, Contact, Home, Jobs, Portfolio, Trainee, What } from './page/import '
import { Navbar, Footer } from './components/import';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<What />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/trainee" element={<Trainee />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

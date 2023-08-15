import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import CalcContainer from './components/Calculator';
import Quote from './components/quote';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<CalcContainer />} />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

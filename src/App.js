import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingHeader from './components/LandingHeader'
import LandingContent from './components/LandingContent'
import './App.css';


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<><LandingHeader /><LandingContent /></>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

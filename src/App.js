import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingHeader from './components/LandingHeader'
import LandingContent from './components/LandingContent'
import './App.css';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

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

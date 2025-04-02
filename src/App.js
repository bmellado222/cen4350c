import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingHeader from './components/LandingHeader'
import LandingContent from './components/LandingContent'
import GlossaryContent from './components/GlossaryContent'
import CharactersContent from './components/CharactersContent'
import CharacterGuide from './components/CharacterGuide';


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
              <Route path="/articles/search" element={<><LandingHeader /><LandingContent /></>} />
              <Route path="/glossary" element={<><LandingHeader /><GlossaryContent /></>} />
              <Route path="/characters" element={<><LandingHeader /><CharactersContent /></>} />
              <Route path="/characters/:characterId" element={<><LandingHeader /><CharacterGuide /></>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

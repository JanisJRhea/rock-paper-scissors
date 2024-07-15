import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Game from './components/game';
import Home from './components/home';
import ScoreDisplay from './components/scoredisplay';
import UserInput from './components/userinput';

function App() {
  return (
    <Router>
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/scoredisplay" element={<ScoreDisplay/>}/>
          <Route path="/userinput" element={<UserInput/>}/>

          

        </Routes>
    </div>
    </Router>
  );
}

export default App;

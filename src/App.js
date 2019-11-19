import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundImage: 'url(/code.jpg)', height: '100vh', backgroundSize: 'cover'}}>
      <div id='intro'>
          <h1>Andrew Rosario</h1>
          <button>About Me</button>
          <button>Resume</button>
      </div>
    </div>
  );
}

export default App;

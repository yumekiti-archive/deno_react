import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("/api")
    .then(res => {
      setPosts(res.data.test)
    })
    
},[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{
          posts  
        }</p>
      </header>
    </div>
  );
}

export default App;

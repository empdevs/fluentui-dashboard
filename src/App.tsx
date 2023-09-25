import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="wrapper">
      <Sidebar/>
      <div className="content">
        <Navbar/>
      </div>
    </div>
  );
}

export default App;

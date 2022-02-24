import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recorder from './components/Recorder/Recorder';
import Calendar from './components/Calendar';

function App() {
  return (
    <div>
      <Recorder />
      <Calendar />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

const App = () => {
  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Evan',
    'Fiona',
    'George',
    'Hannah',
    'Ian',
    'Julia',
  ];

  const Name = () => {
    let randomNum = Math.floor(Math.random() * 9) + 1;

    return names[randomNum];
  };
  return (
    <div className='main'>
      <h1>
        Hello <span className='NmClr'>{Name()}</span>
      </h1>
    </div>
  );
};

export default App;

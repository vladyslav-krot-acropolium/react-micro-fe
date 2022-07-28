import React from 'react';
import MicroApp from '@local/micro-app'
import MaterialApp from '@local/material-app'
import logo from './logo.svg';
import './App.css';

function App() {
  const [shouldThrowError, throwError] = React.useState(false);

  if (shouldThrowError) {
    throw new Error("Snap! The app crashed.")
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the MAIN APP
        </p>
        <button onClick={() => throwError(true)}>Trigger application error</button>
        <MaterialApp />
        <MicroApp />
      </header>
    </div>
  );
}

export default App;

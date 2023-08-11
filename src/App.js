import React, { useState } from 'react';
import './App.css';
import HeadsOrTails from './components/HeadsOrTails';
import Homepage from './components/Homepage';

function App() {

  const [pageShown, setPageShown] = useState(<Homepage/>)
 
  const handleHome = () => {
    setPageShown(<Homepage/>)
  }
  
  const handleFlipper = () => {
    setPageShown(<HeadsOrTails/>)
  }

  return (
    <div>
    <div class='button-bar'>
      <div><button class='bar-button' onClick={handleHome}>Home</button></div> <div><button class='bar-button' onClick={handleFlipper}>Flipper</button></div>
    </div>
    <div className="App">
      <header className="App-header">
        {pageShown}
      </header>
    </div></div>
  );
}

export default App;

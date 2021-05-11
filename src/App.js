import React from 'react';
import './App.css';
import FunctionalBox from './Containers/FunctionalBox';


function App() {
    
  return (
    <div className="App">
      <h1><span role="img" aria-label="glitter">✨</span> My Magical Color Box! <span role="img" aria-label="glitter">✨</span></h1>
      <FunctionalBox/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import Demo from './components/Demo/Demo';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  }

  console.log("App running!");


  // if a parent component is rerendered then all the child components are re-executed(not re-rendered i.e. re-executed != re-rerendered)
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={false} />
      <Button onClick={toggleParagraphHandler}>Show/Hide Paragraph!</Button>
    </div>
  );
}

export default App;

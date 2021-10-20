import React, { useState } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';

function App() {

  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph(!showParagraph)
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Show/Hide Paragraph!</Button>
    </div>
  );
}

export default App;

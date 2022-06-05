import React from 'react';
import quotes from '../quotes.json'
import { useState } from 'react';

const colors =["red", "lightblue", "lightcoral", "lightgreen", "yellow", "coral", "lime", "blueviolet", "orangered"]

const QuoteBox = () => {
    
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [index, setIndex] = useState(randomIndex)

    const changeQuotes = ()=> {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setIndex(randomIndex)
    }

    const randomColor = Math.floor(Math.random() * colors.length);
    document.body.style = `background : ${colors[randomColor]}`

  return (
    <div className='card'style= {{color : colors[randomColor]}}>
      <h1><i className="fa-solid fa-quote-left"></i> {quotes[index].quote}</h1>
      <button onClick={changeQuotes} style= {{background : colors[randomColor]}}>
        <i className="fa-solid fa-greater-than"></i>
      </button>
    </div>
  );
};

export default QuoteBox;
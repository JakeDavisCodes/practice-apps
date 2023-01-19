import React from 'react';
import WordList from './wordList.jsx'

const initialWords = [
  {
    _id: 1,
    word: 'Quetzal',
    definition: 'Gold and green bird with long tail feathers'
  },
  {
    _id: 2,
    word: 'Dissolute',
    definition: 'Of loose morals'
  },
  {
    _id: 3,
    word: 'Belemnoid',
    definition: 'Shaped like a dart'
  },
  {
    _id: 4,
    word: 'Oikonisus',
    definition: 'Desire to start a family'
  },
  {
    _id: 5,
    word: 'Braccate',
    definition: 'Having featherd legs or feet'
  }
]

const App = () => {
  const { useState, useEffect } = React;

  let [words, setWords] = useState(initialWords);
  let [word, setWord] = useState('');
  let [definition, setDefinition] = useState('');

  return (
    <div className="app">
      <label for="word">Enter a word: </label>
      <input type="text"id="word"name="word"onChange={e=>{console.log(e.target.value), setWord(e.target.value)}}/>
      <label for="definition">Enter a definition: </label>
      <input type="text"id="definition"name="definition"onChange={e=>{console.log(e.target.value), setDefinition(e.target.value)}}/>
      <button onClick={(e) => console.log('CLICKY' , e)}>Add Word!</button>
      <WordList words={words}/>
    </div>
  )
}

export default App;
import React from 'react';
import WordList from './wordList.jsx'
import Interface from '../requests.js'

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

  const update = () => {
    Interface.get()
    .then(data=> {
      console.log(data.data)
      setWords(data.data)
    })
  }

  useEffect(()=> {
    update();
  }, [])

  const submitWord = ()=> {
    if(word.length > 0 && definition.length > 0) {
      Interface.post(word, definition)
      .then(() => update())
    } else {
      alert('Please enter a word and definition!')
    }
  }

  const deleteAll = () => {
    Interface.deleteAll()
      .then(setWords([]))
  }

  return (
    <div className="app">
      <button onClick={deleteAll}>Delete All!</button>
      <label for="word">Enter a word: </label>
      <input type="text"id="word"name="word"onChange={e=>{console.log(e.target.value), setWord(e.target.value)}}/>
      <label for="definition">Enter a definition: </label>
      <input type="text"id="definition"name="definition"onChange={e=>{console.log(e.target.value), setDefinition(e.target.value)}}/>
      <button onClick={submitWord}>Add Word!</button>
      <WordList words={words} update={update}/>
    </div>
  )
}

export default App;
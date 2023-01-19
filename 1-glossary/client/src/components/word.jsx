import React from 'react';
import Interface from '../requests.js';

const Word = props => {

  let [newDef, setNewDef] = React.useState('');

  const changeDef = () => {
    Interface.put(props.word._id, newDef);
    props.update()
  }

  const deleteWord = () => {
    Interface.delete(props.word._id)
    props.update()
  }

  return (
    <div>
      <a>{props.word.word}: </a>
      <a>{props.word.definition}</a>
      <div>
        <label for="changeDef"> Change Definition? </label>
        <input id="changeDef"type="text"name="Change Definition"onChange={(e) => setNewDef(e.target.value)}/>
        <button onClick={changeDef}>Change Definition!</button>
        <button onClick={deleteWord}>Delete me?</button>
      </div>
    </div>
  )
}

export default Word;
import React from 'react';
import Interface from '../requests.js';

const Word = props => {

  let [newDef, setNewDef] = React.useState('');


  return (
    <div>
      <a>{props.word.word}: </a>
      <a>{props.word.definition}</a>
      <label for="changeDef"> Change Definition? </label>
      <input id="changeDef"type="text"name="Change Definition"onChange={(e) => setNewDef(e.target.value)}/>
      <button onClick={() => {Interface.put(props.word._id, newDef), props.update()}}>Change Definition!</button>
    </div>
  )
}

export default Word;
import React from 'react';
import Word from './word.jsx';

const WordList = props => {

  return (
    <div>
      {props.words.map(word=> <Word word={word} update={props.update}/>)}
    </div>
  )
}

export default WordList;
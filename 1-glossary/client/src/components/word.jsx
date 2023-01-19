import React from 'react';

const Word = props => {
  return (
    <div>
      <a>{props.word.word}: </a>
      <a>{props.word.definition}</a>
    </div>
  )
}

export default Word;
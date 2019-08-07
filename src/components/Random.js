import React from 'react';

function Random(props) { 

  function randomNumber(min, max) {
    return Math.floor(Math.random()* (max - min) + min);
  }

  return(
    <div>
      <p>Random value between {props.min} and {props.max} => {randomNumber(props.min, props.max)}</p>
    </div>
  )
}

export default Random;

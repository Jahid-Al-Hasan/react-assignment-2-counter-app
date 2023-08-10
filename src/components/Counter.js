import React, { useState } from 'react';

const Counter = () => {

  const [count, setCount] = useState(0);
  const countIncrease = () => {
    if(count < 5){
    setCount(count + 1);
    }
  };
  const countDecrease = () => {
    if(count > -5){
    setCount(count - 1);
    }
  };
  const countReset = () => setCount(0);
  console.log(count)
  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {count}</h2>
        <div className="card__btns">
          <button className={`btn card__btn ${count === 5 ? 'btn:disabled' : ''}`}  onClick={countIncrease} disabled={count >= 5}>+</button>
          <button className={`btn card__btn ${ count === -5 ? 'btn:disabled' : ''}`} onClick={countDecrease} disabled={count <= -5}>-</button>
          <button className="btn card__btn" onClick={countReset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

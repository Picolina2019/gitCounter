import React from 'react';
import { useStyles } from './styles';

function Buttons({count,increment,decrement}) {
    const {
        buttonBlack,
        buttonPink,
        counter,
        controls,
       } = useStyles();
    return (
        <div className={controls}>
        <button className={buttonBlack} onClick={decrement}>
          - DECREMENT
        </button>
        <div className={counter}>Counter: {count}</div>
        <button className={buttonPink} onClick={increment}>
          + INCREMENT
        </button>
     </div>
    )
}

export default Buttons

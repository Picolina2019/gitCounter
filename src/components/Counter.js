import React, { useState, useEffect } from 'react';
import { useStyles } from './styles';
import axios from 'axios';
import { repos } from './repos';
import Loader from './Loader/Loader';
import Description from './Description';
import Buttons from './Buttons';

function Counter() {
  const { wrapper, errorMessage,description } = useStyles();

  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://api.github.com/repos/${repos[count]}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        setError(error.message);
        setData([]);
        setLoading(false);
      });
  }, [count]);

  const increment = () => {
    if (count < repos.length - 1) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
const returnedData = !error &&
  [data].map((d,index) => {
    return <Description className={description} key={index} data={d} /> 
});

  return (
    <div className={wrapper}>
      <Buttons count={count} decrement={decrement} increment={increment} />
      {loading && <Loader />}
      {error && <h3 className={errorMessage}>{error}</h3>}
      {error && count <= 0 && (
        <p className={errorMessage}>
          The value is negative. Please, press INCREMENT.
        </p>
      )}
      {returnedData}
    </div>
  );
}

export default Counter;

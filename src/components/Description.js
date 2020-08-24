import React from 'react';
import { useStyles } from './styles';
import {Star} from './icons';
import {Eye} from './icons'

function Description({ data }) {
  const { box } = useStyles();
  return (
    <div className={box} >
     <h2>{data.name}</h2> 
      <h4> {data.description}</h4>
      <a href={data.homepage} target="_blank">Homepage </a>
      <div>
      <p><Star/> Amount of starts:<span> {data.stargazers_count}</span></p>
      <p><Eye/> Subscribers:<span> {data.subscribers_count}</span></p>
      </div>
    </div>
  );
}

export default Description;

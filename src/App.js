import React, {useState} from 'react';
import {Message} from './message';
import './App.css';

export default function App() {
  let [count,setCount] = useState(0);
  let [isMorning,setMorning] = useState(true);
  
  return (
    
    <div className={`box ${isMorning ? 'daylight' : ''}`}> 
    <h1>Counter App</h1>
    <h1>Day Time = {isMorning ? 'Morning' : 'Night'}</h1>    
      <Message counter = { count }/>          
      <br/>
      <button onClick={ ()=> setCount(++count) }>Counter Increment</button>
      <button onClick={ ()=> setCount(--count) }>Counter Decrement</button>
      <br/><br/>
      <button onClick={ ()=> setMorning(!isMorning) }>Update Day</button>
      </div>
      
  );
}

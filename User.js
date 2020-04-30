import React, { useState, useEffect, useReducer } from "react";
import UserList from "./UserList";
import {Decrement, Increment, Initialize} from "./_actions/Count";
import Reducer from "./_reducers/Reducer";

const Hello = () => {
  const initialState = 10;
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  // useEffect(()=>{
  //    fetch()
  //    .then(user =>{
  //      console.log(user)
  //    })
  // },[])
  useEffect(() => {
    document.title = count; 
    // dispatch('Initialize');
    console.log("Mount!");
  }, []);
 

  return (
    <>
      <h1>Count: {state}</h1>
      <button  
        onClick={() => {
          dispatch('Increment');
        }}
      >
        +
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch("Decrement");
        }}
      >
        -
      </button>
    </>
  );
};
export default Hello;

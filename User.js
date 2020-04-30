import React, { useState, useEffect, useReducer } from "react";
import UserList from "./UserList";
import {Decrement, Increment, Initialize} from "./_actions/Count";
import Reducer from "./_reducers/Reducer";
import PostList from "./PostList";
const User = () => {
  const initialState = 10;
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(Reducer, initialState);
  
  useEffect(() => {
    document.title = count;  
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
      <br/>
      <PostList />
    </>
  );
};
export default User;

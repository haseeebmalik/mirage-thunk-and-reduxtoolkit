import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterUpdate, decrement, increment, incrementByAmount } from "../store/counterSlice";


function Counter() {
  //const [counter, setCounter] = useState(0);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  /*
  // below is for returning only one slice
  const counter = useSelector((state) => {
    console.log("state",state)
    return state.counter.count;
   */ 
  //but if you want many values you should use object like below
    const {counter,isLoading}=useSelector((state)=>{
      console.log("state",state)
      return ({
        counter:state.counter.count,
        isLoading: state.counter.isLoading
      })
    })
    if(isLoading){
      return(
        <div>
          isLoading
        </div>
      )
    }
    
  
  return (
    <div>
      <div>counter:{counter}</div>
      <div>
        <button
          onClick={() => {
            //  setCounter(counter + 1);
            // dispatch({ type: "INCREMENT" });
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <br />
        <button
          onClick={() => {
            // setCounter(counter - 1);
            // dispatch({ type: "DECREMENT" });
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
      </div>
      <div>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            // setCounter(counter + Number(value));
            // dispatch({ type: "INCREMENT_BY_AMOUNT", payload: Number(value) });
            dispatch(incrementByAmount(Number(value)));
          }}
        >
          increment-by-val
        </button>
      </div>
      <div>
        <button onClick={()=>{
           dispatch(counterUpdate(15))
           //we are receiving the value we pass here i.e 15 in the argument "value" in counterUpdate function 
           //on page store/counterslice.js
        }}>Increment from Server</button>
      </div>
    </div>
  );
}

export default Counter;

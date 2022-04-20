import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Burger from "./Components/Burger/Burger";
import counterSlice from "./store/counter";

function App() {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>
        INCREMENT
      </button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>
        DECREMENT
      </button>
      <button
        onClick={() => dispatch(counterSlice.actions.increaseByNumber(5))}
      >
        INCREASE BY NUMBER 5
      </button>
      <button
        onClick={() => dispatch(counterSlice.actions.increaseByNumber(10))}
      >
        INCREASE BY NUMBER 10
      </button>
      <hr />
      <Burger />
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)
  // const counter = 0 // [state: a value, when it changes, the DOM reflects the change (one way or another).]
const increment = () => {
  setCounter(currentVal => currentVal + 1) // Do not modify variables directly(if value changes or action occurs), because of state.
}

const decrement = () => {
  if (counter === 0) return
  setCounter(currentVal => currentVal - 1)
}

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

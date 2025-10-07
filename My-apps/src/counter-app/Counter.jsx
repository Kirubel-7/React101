import { useState } from "react";
import "./counter.css"
function Counter() {
    const [count, setCount] = useState(0);
    
    const Decrement = () =>{
        setCount((c) => (c > 0? c - 1: 0))
    }

    const Increment= () =>{
        setCount((c) => c + 1)
    }
    
    const Reset= () =>{
        setCount((c) => 0);
    }
  return (
    <div className="counter-container">
      <p className="counter-name">Counter App 101</p>
      <p className="counter-display">{count}</p>
      <button onClick={Decrement} className="counter-button">Decrement</button>
      <button onClick={Reset} className="counter-button">Reset</button>
      <button onClick={Increment} className="counter-button">Increment</button>
    </div>
  );
}
export default Counter;

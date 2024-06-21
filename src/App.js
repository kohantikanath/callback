import logo from './logo.svg';
import './App.css';
import { memo, useCallback, useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const incrementCount = useCallback(() => setCount(count + 1), [count]);
  return (
    <div className="App">
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={incrementCount}>Increment Counter</button>
      <h3>Input text: {input}</h3>
      <h3>count: {count}</h3>
      <hr/>
      <ChildComponent count={count} incre={incrementCount}/>
    </div>
  );
}

const ChildComponent = memo(({count, incre}) => {
  console.log("rendering");
  return (
    <div>
      <h2>This is a child component</h2>
      <h4>count: {count}</h4>
      <button onClick={incre}>Increment Counter</button>
    </div>
  );
})

export default App;

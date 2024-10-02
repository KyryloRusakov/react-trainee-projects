import { useState } from 'react';
import './index.scss';

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Сounter:</h2>
        <h1>{count}</h1>
        <button className="minus" onClick={decrement}>- Minus</button>
        <button className="plus" onClick={increment}>Plus +</button>
      </div>
    </div>
  );
}

export default App;

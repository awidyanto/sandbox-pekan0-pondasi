import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
      <h1>Aplikasi Counter (TS Version)</h1>
      <p>Nilai saat ini:</p>

        <h2 className="counter-value">{count}</h2>
        <div className="button-group">
          <button onClick={decrement}>- Kurangi</button>
          <button onClick={increment}>+ Tambah</button>
        </div>
      </div>
    </>
  );
}

export default App;

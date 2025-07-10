import { useState } from 'react';
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
    <div className="bg-slate-900 min-h-screen flex items-center justify-center text-white">
    <div className="bg-slate-800 p-8 rounded-xl shadow-lg text-center">
    <h1 className="text-2xl font-bold mb-4">Aplikasi Counter Tailwind</h1>
        <p className="text-slate-400">Nilai saat ini:</p>

        <h2 className="text-7xl font-mono font-bold my-4">{count}</h2>
        <div className="flex gap-4 justify-center">
        <button
            onClick={decrement}
            className="bg-red-500 px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            - Kurangi
          </button>
          <button
            onClick={increment}
            className="bg-green-500 px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            + Tambah
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;

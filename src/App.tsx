import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // 'useState' adalah cara React untuk mengingat sebuah nilai yang bisa berubah.
  // Di sini, kita bilang: "React, tolong ingat nilai 'count', awalnya adalah 0".
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah nilai count
  const increment = () => {
    setCount(count + 1);
  };

  // Fungsi untuk mengurangi nilai count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <h1>Aplikasi Counter</h1>
        <p>Nilai saat ini:</p>
        {/* Menampilkan nilai 'count' yang diingat React */}
        <h2 className="counter-value">{count}</h2>
        <div className="button-group">
          {/* Saat tombol ini diklik, panggil fungsi 'decrement' */}
          <button onClick={decrement}>- Kurangi</button>
          {/* Saat tombol ini diklik, panggil fungsi 'increment' */}
          <button onClick={increment}>+ Tambah</button>
        </div>
      </div>
    </>
  );
}

export default App;

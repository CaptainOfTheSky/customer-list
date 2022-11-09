import './App.css';
import React, { useState, useRef } from 'react';

function App() {
  const val = useRef(null);
  const [names, setNames] = useState(['John', 'Katie']);

  const addName = () => {
    console.log(val.current.value);

    if(val.current.value != null && val !=='') {
      setNames(prev => [...prev, val.current.value]);
      // val.current.value = '';
    }
  }

  return (
    <div className="App">
      <input type="text" ref={val} />
      <button onClick={addName}>Add</button>

      <div>
        {names && names.map((cust, index) =>
          <div key={index} className="card">{cust}</div>
        )}

      </div>
    </div>
  );
}

export default App;

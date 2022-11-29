import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const increment = () => setNumber(number + 1);

  const decrement = () => setNumber(number - 1);

  return (
    <div>
      <article>
        <ul>
          <li>
            <button onClick={increment}>+1</button>
          </li>
          <li>{number}</li>
          <li>
            <button onClick={decrement}>-1</button>
          </li>
        </ul>
      </article>
    </div>
  );
}

/* 
1. Stateless component - class / function
2. Stateful component - class / function
*/

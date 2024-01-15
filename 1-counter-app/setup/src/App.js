import React, { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  console.log(number);

  // function addValue() {
  //   setNumber(number + 23);
  // }

  const addValue = () => {
    setNumber(number + 23);
  };

  function deductValue() {
    setNumber(number - 23);

    if (number <= 0) {
      alert("Number is already less than 0");
      setNumber(0);
    }
  }

  return (
    <div className="container">
      <button onClick={() => setNumber(number + 45)}>Add</button>
      <h2>{number}</h2>
      <button onClick={deductValue}>Subtract</button>
    </div>
  );
}

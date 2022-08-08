import React from "react"

function App() {
  const [counter, setCounter] = React.useState(500)

  return (
    <React.Fragment>
      <div>
        <button onClick={() => setCounter(counter + 1)}>+1</button>

        <p>{counter}</p>

        <button onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
    </React.Fragment>
  )
}

export default App

import { useState, useEffect, useRef } from "react"

export default function Ref() {
  const [initialValue, setInitialValue] = useState("")
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })

  return (
    <>
      <h1>The Ref Hook</h1>
      <input
        type="text"
        name="text"
        id="text"
        value={initialValue}
        onChange={(e) => setInitialValue(e.target.value)}
      />
      <h2>Rendered: {count.current} times</h2>

      <FocusInput />
      <TrackPreviousState />
    </>
  )
}

function FocusInput() {
  const input = useRef()

  const focusOnInput = () => {
    input.current.focus()
  }

  return (
    <>
      <h2>useRef to focus input</h2>
      <input type="text" ref={input} />
      <button onClick={focusOnInput}>Focus on Input</button>
    </>
  )
}

function TrackPreviousState() {
  const [initial, setInitial] = useState("")
  const previousValue = useRef("")

  useEffect(() => {
    previousValue.current = initial
  }, [initial])

  return (
    <>
      <h2>Track Previous State</h2>
      <input
        type="text"
        value={initial}
        onChange={(e) => setInitial(e.target.value)}
      />

      <h3>Current Value: {initial}</h3>
      <h3>Previous Value: {previousValue.current}</h3>
    </>
  )
}

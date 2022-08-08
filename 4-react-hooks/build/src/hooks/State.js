import React, { useState } from "react"

export default function State() {
  const [name, setName] = useState("")
  const [people, setPeople] = useState([])
  const [count, setCount] = useState({
    name: "Thomas",
    title: "FE Web Developer",
    company: "Freelance",
  })
  const [initial, setInitial] = useState(null)

  return (
    <>
      <h1>The State Hook</h1>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Welcome back: {name}</p>
    </>
  )
}

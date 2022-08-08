import { useState } from "react"
import Resume from "./Resume"
import { v4 as uuidv4 } from "uuid"

function App() {
  const [experiences, setExperiences] = useState([])
  const [exptext, setexpText] = useState("")

  return (
    <>
      <Resume />
    </>
  )
}

export default App

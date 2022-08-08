import { useState } from "react"
import {
  numbers,
  lowercaseLetters,
  uppercaseLetters,
  specialSymbols,
} from "./data"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  const [lowercase, setLowercase] = useState(false)
  const [uppercase, setUppercase] = useState(false)
  const [number, setNumber] = useState(false)
  const [symbols, setSymbols] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState(16)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const generateStrongPassword = () => {
    let generatedPassword = ""

    if (lowercase) generatedPassword += lowercaseLetters

    if (uppercaseLetters) generatedPassword += uppercaseLetters

    if (numbers) generatedPassword += numbers

    if (symbols) generatedPassword += specialSymbols

    setPassword(createPassword(generatedPassword))
  }

  const createPassword = (generatedPassword) => {
    let password = ""
    const generatedPasswordLength = generatedPassword.length

    for (let i = 0; i < passwordLength; i++) {
      const passwordIndex = Math.floor(Math.random() * generatedPasswordLength)
      password += generatedPassword.toString().charAt(passwordIndex)
    }
    return password
  }

  const copyToClipboard = () => {
    if (!password) {
      toast.error("Nothing to copy!")
    } else {
      navigator.clipboard.writeText(password)
      toast.success("Copied to clipboard!")
    }
  }

  return (
    <>
      <h1>Password Generator</h1>
      <div className="container">
        <div className="password">
          <p>{password}</p>
          <button onClick={copyToClipboard}>Copy To Clipboard</button>
        </div>

        <form onSubmit={handleSubmit}>
          <article>
            <label htmlFor="password-length">Password Length</label>
            <input
              type="number"
              name="password-length"
              id="password-length"
              min="8"
              max="20"
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
            />
          </article>

          <article>
            <label htmlFor="lowercase">Lowercase Letters</label>
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={lowercase}
              onChange={(e) => setLowercase(e.target.checked)}
            />
          </article>

          <article>
            <label htmlFor="uppercase">Uppercase Letters</label>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
            />
          </article>

          <article>
            <label htmlFor="numbers">Numbers</label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={number}
              onChange={(e) => setNumber(e.target.checked)}
            />
          </article>

          <article>
            <label htmlFor="symbols">Symbols</label>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={symbols}
              onChange={(e) => setSymbols(e.target.checked)}
            />
          </article>

          <button
            onClick={generateStrongPassword}
            type="submit"
            className="submit"
          >
            Suggest Strong Password
          </button>
        </form>

        <ToastContainer position="top-right" theme="colored" />
      </div>
    </>
  )
}

export default App

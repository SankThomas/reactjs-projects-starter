import { createContext, useState, useContext } from "react"

const UserContext = createContext()

export default function Context() {
  const [user, setUser] = useState("Thomas Sankara")

  return (
    <UserContext.Provider value={user}>
      <h1>The Context Hook</h1>
      <OtherComponent />
      <EvenAnotherComponent />
    </UserContext.Provider>
  )
}

function OtherComponent() {
  const user = useContext(UserContext)

  return (
    <>
      <h2>Other Component: {user}</h2>
      <AnotherComponent />
    </>
  )
}

function AnotherComponent() {
  const user = useContext(UserContext)

  return (
    <>
      <h2>Another Component: {user}</h2>
    </>
  )
}

function EvenAnotherComponent() {
  const user = useContext(UserContext)

  return (
    <>
      <h3>Even Another Component: {user}</h3>
    </>
  )
}

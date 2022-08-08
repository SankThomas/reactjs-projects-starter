import { useState, useEffect } from "react"

export default function Effect() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    document.title = "The Effect Hook"
  })

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000)
  }, [])

  // const fetchApiData = async() => {
  //   const response = await fetch("https://api.github.com/users")
  //   const data = await response.json()
  //   setUsers(data)
  // }

  useEffect(() => {
    const fetchApiData = async () => {
      const response = await fetch("https://api.github.com/users")
      const data = await response.json()
      setUsers(data)
    }

    fetchApiData()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(count + 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <h1>The Effect Hook</h1>
      <h2>useEffect to change document title</h2>
      <h2>useEffect to add timer: {count}</h2>
      <h2>useEffect to fetch API Data: Showing {users.length} users</h2>
      <h2>useEffect cleanup function: {count}</h2>
    </>
  )
}

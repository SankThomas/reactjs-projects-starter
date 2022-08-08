import { useState, useEffect } from "react"

function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res = await fetch("https://api.github.com/users")
    const data = await res.json()
    setUsers(data)

    console.log(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <>
      <div>
        {users.map((user) => {
          const { avatar_url, login, html_url, id } = user

          return (
            <article key={id}>
              <img src={avatar_url} alt={login} title={login} />
              <h2>{login}</h2>

              <a href={html_url}>GitHub Profile</a>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default App

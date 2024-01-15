import React, { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <>
      <section>
        {users.map((user) => (
          <article key={user.id}>
            <img src={user.avatar_url} alt="" />
            <h2>{user.login}</h2>
            <a href={user.html_url}>Github Profile</a>
          </article>
        ))}
      </section>
    </>
  );
}

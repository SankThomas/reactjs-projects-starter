import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "Thomas Sankara",
    title: "Front-end web developer",
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Front-end web developer",
  },
  {
    id: 3,
    name: "John Doe",
    title: "Front-end web developer",
  },
  {
    id: 4,
    name: "Batman",
    title: "Front-end web developer",
  },
];

export default function App() {
  const [people, setPeople] = useState(data);

  // Fragment

  const handleDelete = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const handleRefresh = () => {
    setPeople(data);
  };

  return (
    <React.Fragment>
      <section className="showcase">
        <div className="overlay">
          <h1>{people.length} people</h1>

          <div>
            <ul>
              {people.map((person) => (
                <React.Fragment key={person.id}>
                  <li className="name">{person.name}</li>
                  <li className="title">{person.title}</li>
                  <button onClick={() => handleDelete(person.id)}>
                    Delete
                  </button>
                </React.Fragment>
              ))}
            </ul>

            <button onClick={handleRefresh}>Refresh</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

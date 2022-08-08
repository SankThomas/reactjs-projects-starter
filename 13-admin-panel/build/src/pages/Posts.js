import { useState } from "react"
import { posts } from "../data/data"

export default function Posts() {
  const [items, setItems] = useState(posts)

  const handleFilter = (category) => {
    setItems(items.filter((item) => item.category === category))
  }

  return (
    <>
      <section className="section">
        <h1>Posts</h1>
        <p>Create, edit and manage the posts on your site</p>

        <ul
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "0.5rem",
          }}
        >
          <Categories items={items} handleFilter={handleFilter} />
        </ul>

        <div>
          {items.map((post, index) => (
            <h3 key={index}>{post.title}</h3>
          ))}
        </div>
      </section>
    </>
  )
}

const Categories = ({ items, handleFilter }) => {
  return (
    <>
      {
        new Set(
          items.map(({ id, category }) => (
            <li key={id}>
              <button
                onClick={() => handleFilter(category)}
                className={`btn btn-gray`}
              >
                {category}
              </button>
            </li>
          ))
        )
      }
    </>
  )
}

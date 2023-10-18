import { useState } from "react";
import { products } from "./data";

export default function App() {
  const [items, setItems] = useState(products);

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: 32 }}>
        Showing {items.length} items
      </h1>
      <section className="grid">
        {items.map((item) => (
          <article key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="delete-btn"
            >
              Delete item
            </button>
          </article>
        ))}
      </section>
    </>
  );
}

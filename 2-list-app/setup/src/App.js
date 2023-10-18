import React, { useState } from "react";
import { products } from "./data";

export default function App() {
  const [items, setItems] = useState(products);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleRefresh = () => {
    setItems(products);
  };

  return (
    <>
      <h1 style={{ marginTop: 32, textAlign: "center" }}>
        Showing {items.length} items
      </h1>
      <section className="grid">
        {/* {items.map((item) => {
        return (
          <article key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        );
      })} */}

        {/* {items.map((item, index) => (
          <article key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button
              className="delete-btn"
              onClick={() => handleDelete(item.id)}
            >
              Delete item
            </button>
          </article>
        ))} */}

        {items.map(({ id, title, description, thumbnail }) => (
          <article key={id}>
            <img src={thumbnail} alt={title} />
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="delete-btn" onClick={() => handleDelete(id)}>
              Delete item
            </button>
          </article>
        ))}
      </section>

      <button
        style={{ display: "block", marginInline: "auto" }}
        className="delete-btn"
        onClick={handleRefresh}
      >
        Refresh
      </button>
    </>
  );
}

import React, { useState, useEffect } from "react";
import List from "./components/List";

const fetchLocalStorage = () => {
  let items = localStorage.getItem("items");

  if (items) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
};

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(fetchLocalStorage());
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Input is empty");
    } else {
      const newItem = {
        title: text,
        id: new Date().getTime().toString(),
      };
      setItems([newItem, ...items]);
      setText("");
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const editingItem = items.find((item) => item.id === id);
    setItems(items.filter((item) => item.id !== id));
    setIsEditing(true);
    setText(editingItem.title);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <section>
        <div className="container">
          <h2>Todo List</h2>
          <p className="item-number">
            You have {items.length} items in your ToDo List
          </p>

          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="todo-item"
                id="todo-item"
                placeholder="E.g. bread"
                required
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
              <button type="submit" onClick={handleSubmit}>
                Add
              </button>
            </form>
          </div>
        </div>

        {/* List items */}
        <div className="list-items">
          <List
            items={items}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </section>
    </>
  );
}

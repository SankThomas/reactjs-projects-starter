import React, { useState, useEffect } from "react";
import List from "./components/List";

function getLocalStorage() {
  let items = localStorage.getItem("items");

  if (items) {
    return JSON.parse(localStorage.getItem("items"));
  } else {
    return [];
  }
}

export default function App() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);

  function handleSubmit(e) {
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
      setIsEditing(false);
    }
  }

  function handleDelete(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleEdit(id) {
    const editingItem = items.find((item) => item.id === id);
    setItems(items.filter((item) => item.id !== id));
    setIsEditing(true);
    setText(editingItem.title);
  }

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <section>
        <div className="container">
          <h2>Todo List</h2>
          <p className="item-number">
            You have {items.length} items in your ToDo list.
          </p>

          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="todo-item"
                id="todo-item"
                placeholder="E.g bread"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button onClick={handleSubmit} type="submit">
                {isEditing ? "Editing Item" : "Add"}
              </button>
            </form>
          </div>
        </div>

        <div>
          <List
            listItems={items}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        </div>
      </section>
    </>
  );
}

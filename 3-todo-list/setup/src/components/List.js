import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function List({ items, handleEdit, handleDelete }) {
  return (
    <>
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}
            <div>
              <button
                onClick={() => handleEdit(item.id)}
                className="edit-button"
              >
                <AiFillEdit />
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-button"
              >
                <AiFillDelete />
              </button>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

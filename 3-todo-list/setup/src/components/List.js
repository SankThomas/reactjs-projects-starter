import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function List({ listItems, handleDelete, handleEdit }) {
  return (
    <div className="list-items">
      <ol>
        {listItems.map((item) => (
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
    </div>
  );
}

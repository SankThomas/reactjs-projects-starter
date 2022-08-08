import React, { useState } from "react"
import { FaEdit } from "react-icons/fa"
import { AiFillDelete } from "react-icons/ai"

function App() {
  const [text, setText] = useState("")
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert("Please type in something")
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: text,
      }
      setList([newItem, ...list])
      setText("")
    }
  }

  return (
    <>
      <div className="todo-container">
        <h1>Todo Meter</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="text">Add a todo item</label>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Add a todo item"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">+ Add item</button>
        </form>
      </div>

      <ol className="list-container">
        {list.map(({ id, title }) => (
          <React.Fragment key={id}>
            <div>
              <li>{title}</li>

              <article>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <AiFillDelete />
                </button>
              </article>
            </div>
          </React.Fragment>
        ))}
      </ol>

      <br />
      <small>You have {list.length} items in your todo list</small>
    </>
  )
}

export default App

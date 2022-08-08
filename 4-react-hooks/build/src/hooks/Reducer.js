import { useReducer } from "react"

const initialTodos = [
  {
    id: 1,
    title: "Buy eggs",
    isComplete: false,
  },
  {
    id: 2,
    title: "Record YouTube video",
    isComplete: false,
  },
  {
    id: 3,
    title: "Publish SpaceX Video",
    isComplete: true,
  },
]

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, isComplete: !todo.isComplete }
        } else {
          return todo
        }
      })
    default:
      return state
  }
}

export default function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id })
  }

  return (
    <>
      <h1>The Reducer Hook</h1>
      {todos.map((todo) => (
        <article key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.isComplete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </article>
      ))}
    </>
  )
}

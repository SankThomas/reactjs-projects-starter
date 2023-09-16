import useFetch from "../hooks/useFetch"
import { format } from "date-fns"

export default function Issues() {
  const issues = useFetch()
  return (
    <div className="issues-container">
      {issues.map(
        ({ title, number, state, user, created_at, html_url, labels }) => (
          <article key={number}>
            <div>
              <p className={`${state === "open" && "open"}`}></p>
            </div>
            <div>
              <a href={html_url}>{title} </a>
              {labels.map((label, index) => (
                <small
                  key={index}
                  style={{
                    backgroundColor: `#${label.color}50`,
                  }}
                >
                  <a href={label.url}>{label.name}</a>
                </small>
              ))}
              <p>
                #{number} opened {format(new Date(created_at), "dd MMMM yyyy")}{" "}
                by <a href={user.html_url}>{user.login}</a>
              </p>
            </div>
          </article>
        )
      )}
    </div>
  )
}

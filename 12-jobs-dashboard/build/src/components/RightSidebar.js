import React from "react"

export default function RightSidebar({ items, value }) {
  const { company, title, about, responsibilities, qualifications } =
    items[value]

  return (
    <aside className="sidebar right-sidebar">
      <div>
        <h2>
          {title} at {company}
        </h2>
        <h4>Responsibilities</h4>
        <ol>
          {responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>

        <br />
        <h4>Qualifications</h4>
        <ol>
          {qualifications.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>

      <br />
      <div>
        <h4>About</h4>
        <p>{about}</p>
        <button className="apply">Apply Now</button>
      </div>

      <div></div>
    </aside>
  )
}

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { links } from "../data/data"

export default function Home() {
  const [cards] = useState(links)

  return (
    <>
      <section className="section">
        <h1>
          This is your homepage. There are many like it, but this one is yours.
        </h1>
        <br />

        <div className="cards">
          {cards.map((card) => (
            <Link
              to={card.url}
              key={card.id}
              style={{ backgroundColor: `${card.color}` }}
            >
              <article>
                <h2>
                  <span>{card.icon}</span> {card.title}
                </h2>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

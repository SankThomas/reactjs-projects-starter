import { useState } from "react"
import { questions, plans } from "../data/data"

export default function Upgrades() {
  const [quests] = useState(questions)
  const [cards] = useState(plans)
  const [yearly, setYearly] = useState(false)

  return (
    <>
      <section className="section">
        <h1>Upgrade your plan to enjoy more features</h1>
        <br />
        <p>See and compare the features available on each plan.</p>

        <br />

        <ul className="buttons">
          <li>
            <button
              onClick={() => setYearly(false)}
              className={`btn btn-gray ${!yearly && "btn-active"}`}
            >
              Monthly
            </button>
          </li>
          <li>
            <button
              onClick={() => setYearly(true)}
              className={`btn btn-gray ${yearly && "btn-active"}`}
            >
              Yearly
            </button>
          </li>
        </ul>

        <section className="price-cards">
          {cards.map((card) => (
            <article
              key={card.id}
              style={{ backgroundColor: `${card.borderColor}35` }}
            >
              <h3>{card.title}</h3>
              {!yearly && (
                <h4
                  style={{
                    borderBottomWidth: 2,
                    borderBottomStyle: "solid",
                    borderBottomColor: `${card.borderColor}`,
                  }}
                >
                  <span>$</span> {card.monthly} <span>per month</span>
                </h4>
              )}
              {yearly && (
                <h4
                  style={{
                    borderBottomWidth: 2,
                    borderBottomStyle: "solid",
                    borderBottomColor: `${card.borderColor}`,
                  }}
                >
                  <span>$</span> {card.yearly} <span>per month</span>
                </h4>
              )}
              <p className="about">
                <strong>{card.about}</strong>
              </p>
              <p className="desc">{card.desc}</p>

              <ul>
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <button className="btn btn-blue">{card.button}</button>
            </article>
          ))}
        </section>

        <section>
          <br />
          <br />
          <h2>Frequently asked questions</h2>
          <div className="questions">
            {quests.map((quest) => (
              <article key={quest.id}>
                <h3>{quest.question}</h3>
                <p>{quest.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

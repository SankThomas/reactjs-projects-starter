import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { items } from "./data"
import SingleProduct from "./SingleProduct"

function App() {
  const [cards] = useState(items)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Online Store With Tabs</h1>
              <br />

              <div className="cards">
                {cards.map((card) => (
                  <Link key={card.id} to={`/${card.id}`}>
                    <article>
                      <img src={card.images[0]} alt={card.title} />
                      <h2>{card.title}</h2>
                      <p>{card.description}</p>
                    </article>
                  </Link>
                ))}
              </div>
            </>
          }
        ></Route>
        <Route path="/:id" element={<SingleProduct></SingleProduct>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

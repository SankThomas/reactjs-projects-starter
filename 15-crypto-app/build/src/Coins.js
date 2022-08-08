import React from "react"

export default function Coins({ symbol, name, image, current_price }) {
  return (
    <>
      <article>
        <div>
          <img src={image} alt={name} />
          <h3>{name}</h3>
          <p>{symbol}</p>
        </div>

        <div>
          <h2>${current_price}</h2>
        </div>
      </article>
    </>
  )
}

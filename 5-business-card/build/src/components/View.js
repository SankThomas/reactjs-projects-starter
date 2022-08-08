import React, { useState } from "react"
import Share from "./Share"

export default function View({ showView, setShowView }) {
  const [showShare, setShowShare] = useState(false)

  return (
    <>
      <div className="container">
        <p>+254 712 345 678</p>
        <h1 onClick={() => setShowView(false)}>Thomas Sankara</h1>
        <p>Click on the name to go back to the initial state.</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam nihil
          quidem accusantium excepturi eum natus.
        </p>

        <small>tsbsankara@gmail.com</small>

        {!showShare && (
          <button onClick={() => setShowShare(true)}>Share</button>
        )}

        {showShare && (
          <Share showShare={showShare} setShowShare={setShowShare} />
        )}
      </div>
    </>
  )
}

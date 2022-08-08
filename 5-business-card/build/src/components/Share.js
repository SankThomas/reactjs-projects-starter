import React from "react"

export default function Share({ showShare, setShowShare }) {
  return (
    <>
      <div className="share">
        <ul>
          <li>
            <a href="https://twitter.com/tsbsankara">Twitter</a>
          </li>
          <li>
            <a href="https://youtube.com/tsbsankara">YouTube</a>
          </li>
        </ul>

        <button className="close" onClick={() => setShowShare(false)}>
          Close
        </button>
      </div>
    </>
  )
}

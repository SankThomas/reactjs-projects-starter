import React from "react"

export default function Preview({ md, markdown }) {
  return (
    <>
      <div className="preview">
        Preview
        <br />
        <br />
        <div
          className="actual-markdown"
          dangerouslySetInnerHTML={{ __html: md.render(markdown) }}
        ></div>
      </div>
    </>
  )
}

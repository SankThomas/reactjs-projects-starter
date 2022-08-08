import React from "react"

export default function Home({ showView, setShowView }) {
  return (
    <>
      <div className="container" onClick={() => setShowView(true)}>
        <h1>Business Card</h1>
        <p>
          You can click anywhere on this card to view the business card of the
          person
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
          totam laboriosam nisi minus nihil obcaecati debitis deserunt amet
          molestiae cum.
        </p>
      </div>
    </>
  )
}

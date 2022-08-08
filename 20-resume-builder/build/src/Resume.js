import React from "react"

export default function Resume() {
  return (
    <>
      <div className="resume">
        <article style={{ padding: "1.5rem" }}>
          <h1
            contentEditable={true}
            suppressContentEditableWarning={true}
            className="name"
          >
            Your Name
          </h1>
          <p
            contentEditable={true}
            suppressContentEditableWarning={true}
            className="job-title"
          >
            Your Job Title
          </p>
        </article>

        <article className="resume-body">
          <div>
            <h2 contentEditable={true} suppressContentEditableWarning={true}>
              About Yourself
            </h2>
            <p contentEditable={true} suppressContentEditableWarning={true}>
              This is a small paragraph about yourself describing your
              achievements and your current work. It is prudent to keep this
              about 3 to 4 sentences as interviewers do not have time to read
              everything. Admiration we surrounded possession frequently he.
              Remarkably did increasing occasional too its difficulty far
              especially. Known tiled but sorry joy balls. Bed sudden manner
              indeed fat now feebly. Face do with in need of wife paid that be.
              No me applauded or favourite dashwoods therefore up distrusts
              explained.
            </p>
          </div>

          <div>
            <h2 contentEditable={true} suppressContentEditableWarning={true}>
              EXPERIENCE
            </h2>
            <input type="date" name="start" id="start" />
            <input type="date" name="end" id="end" />
            <p contentEditable={true} suppressContentEditableWarning={true}>
              This is a small paragraph describing your past and present
              experience. It real sent your at. Amounted all shy set why
              followed declared. Repeated of endeavor mr position kindness
              offering ignorant so up. Simplicity are melancholy preference
              considered saw companions. Disposal on outweigh do speedily in on.
              Him ham although thoughts entirely drawings. Acceptance unreserved
              old admiration projection nay yet him. Lasted am so before on
              esteem vanity oh.
            </p>
          </div>

          <div>
            <h2 contentEditable={true} suppressContentEditableWarning={true}>
              EDUCATION
            </h2>
            <p contentEditable={true} suppressContentEditableWarning={true}>
              This is a small paragraph describing your past and present and
              current educational status. It real sent your at. Amounted all shy
              set why followed declared. Repeated of endeavor mr position
              kindness offering ignorant so up. Simplicity are melancholy
              preference considered saw companions. Disposal on outweigh do
              speedily in on. Him ham although thoughts entirely drawings.
              Acceptance unreserved old admiration projection nay yet him.
              Lasted am so before on esteem vanity oh.
            </p>
          </div>
        </article>
      </div>
    </>
  )
}

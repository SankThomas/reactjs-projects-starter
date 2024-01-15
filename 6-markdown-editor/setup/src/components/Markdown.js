import React from "react";

export default function Markdown({ markdown, setMarkdown }) {
  return (
    <section>
      <h2>Markdown</h2>

      <textarea
        name="markdown"
        id="markdown"
        cols="30"
        rows="10"
        placeholder="Click here to begin typing in markdown"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
    </section>
  );
}

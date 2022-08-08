export default function Markdown({ markdown, setMarkdown }) {
  return (
    <section>
      <div className="markdown">
        <p>Markdown</p>

        <textarea
          name="markdown"
          id="markdown"
          cols="30"
          rows="10"
          placeholder="Click here to begin typing"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
      </div>
    </section>
  )
}

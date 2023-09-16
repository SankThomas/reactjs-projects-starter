import { useState } from "react";
import Markdown from "./components/Markdown";
import Preview from "./components/Preview";
import { Remarkable } from "remarkable";
import hljs from "highlight.js";

const md = new Remarkable({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (err) {}

    return "";
  },
});

function App() {
  const [markdown, setMarkdown] = useState("");

  return (
    <>
      <div className="container">
        <Markdown markdown={markdown} setMarkdown={setMarkdown} />
        <Preview md={md} markdown={markdown} />
      </div>
    </>
  );
}

export default App;

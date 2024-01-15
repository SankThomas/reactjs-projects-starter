import React from "react";

export default function Preview({ md, markdown }) {
  return (
    <div className="preview">
      <h2>Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: md.render(markdown) }}></div>
    </div>
  );
}

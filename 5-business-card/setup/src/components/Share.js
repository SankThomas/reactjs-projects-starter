import React, { useState } from "react";

export default function Share() {
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      {showShare && (
        <div className="share">
          <ul>
            <li>Twitter</li>
            <li>
              <a href="https://youtube.com">YouTube</a>
            </li>
          </ul>

          <button onClick={() => setShowShare(false)}>Close</button>
        </div>
      )}

      {!showShare && (
        <button
          style={{ marginTop: "1rem" }}
          onClick={() => setShowShare(true)}
        >
          Share
        </button>
      )}
    </>
  );
}

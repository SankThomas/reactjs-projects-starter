import React from "react";

export default function DefaultView({ setIsShowing }) {
  return (
    <div onClick={() => setIsShowing(true)} className="default-view">
      <h1>Business card</h1>

      <p>Click anywhere on the card to reveal more information.</p>
    </div>
  );
}

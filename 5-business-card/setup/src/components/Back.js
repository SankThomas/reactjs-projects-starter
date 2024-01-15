import React from "react";
import Share from "./Share";

export default function Back({ setIsShowing }) {
  return (
    <div className="back">
      <p>0710 123 456</p>

      <h1 onClick={() => setIsShowing(false)}>Thomas Sankara</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        ducimus perferendis officiis iusto animi quidem officia tempore
        laudantium cum reprehenderit?
      </p>

      <Share />
    </div>
  );
}

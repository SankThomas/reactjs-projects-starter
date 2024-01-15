import React, { useState } from "react";

import DefaultView from "./components/DefaultView";
import Back from "./components/Back";

export default function App() {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <section
      style={{
        maxWidth: 500,
        marginInline: "auto",
      }}
    >
      {isShowing ? (
        <Back setIsShowing={setIsShowing} />
      ) : (
        <DefaultView setIsShowing={setIsShowing} />
      )}
    </section>
  );
}

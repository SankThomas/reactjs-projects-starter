import React from "react";
import phone from "./phone.png";
import {
  AiFillBehanceCircle,
  AiFillDribbbleCircle,
  AiFillInstagram,
} from "react-icons/ai";

export default function App() {
  return (
    <section>
      <h1>
        Thomas Sankara is a Front-end Web Developer based in Nairobi, Kenya.
      </h1>

      <img src={phone} alt="phone" />

      <h2>Hire me</h2>
      <ul>
        <li>
          <AiFillBehanceCircle />
        </li>
        <li>
          <AiFillDribbbleCircle />
        </li>
        <li>
          <AiFillInstagram />
        </li>
      </ul>
    </section>
  );
}

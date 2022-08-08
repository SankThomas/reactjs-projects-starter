import {
  AiFillBehanceCircle,
  AiFillDribbbleCircle,
  AiFillInstagram,
} from "react-icons/ai"
import phone from "./phone.png"

function App() {
  return (
    <>
      <section className="container">
        <article>
          <h1>
            Thomas Sankara is a Front-end Web Developer based in Nairobi, Kenya.
          </h1>
        </article>

        <article className="image">
          <img src={phone} alt="" />
        </article>

        <article>
          <h2>Hire Me</h2>
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
        </article>
      </section>
    </>
  )
}

export default App

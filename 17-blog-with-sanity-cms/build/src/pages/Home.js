import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import client from "../client"
import { format } from "date-fns"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
            title,
            slug,
            body,
            publishedAt,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt,
            }
          } | order(publishedAt desc)`
      )
      .then((data) => setPosts(data))
      .catch(console.error)
  }, [])

  return (
    <>
      <section className="posts">
        <br />
        <h1>Read My Blog Posts</h1>
        <br />

        <div className="cards">
          {posts.map((post) => (
            <Link to={`/${post.slug.current}`} key={post.slug}>
              <article>
                <img src={post.mainImage.asset.url} alt={post.title} />

                <div>
                  <h2>{post.title}</h2>
                  <p>{`${post.body[1].children[0].text.substring(
                    0,
                    200
                  )}...`}</p>
                  <p>
                    Published on:{" "}
                    {format(new Date(post.publishedAt), "dd MMMM yyyy")}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

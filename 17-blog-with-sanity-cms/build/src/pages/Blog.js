import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import client from "../client"
import BlockContent from "@sanity/block-content-to-react"
import { format } from "date-fns"

export default function Blog() {
  const [blog, setBlog] = useState([])
  const { slug } = useParams()

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
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
        },
        "name": author->name,
      }`
      )
      .then((data) => setBlog(data[0]))
      .catch(console.error)
  }, [slug])

  return (
    <>
      <section className="blog">
        <h1>{blog.title}</h1>
        <div>
          <Link to="/" className="btn">
            Read More Articles
          </Link>
        </div>
        <br />

        <div>
          {blog.mainImage && blog.mainImage.asset && (
            <img
              src={blog.mainImage.asset.url}
              alt={blog.title}
              title={blog.title}
            />
          )}

          {blog.publishedAt && (
            <small>
              By {blog.name} on{" "}
              {format(new Date(blog.publishedAt), "dd MMMM yyyy")}
            </small>
          )}

          <BlockContent
            blocks={blog.body}
            projectId="9bnraqna"
            dataset="production"
            className="blocks"
          />

          <Link to="/" className="btn">
            Read More Articles
          </Link>
        </div>
      </section>
    </>
  )
}

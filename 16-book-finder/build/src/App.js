import { useState, useEffect } from "react"

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_API_KEY}`
      )
      const data = await res.json()
      setBooks(data.results.books)
    }

    fetchBooks()
  }, [])

  return (
    <>
      <h1>Showing Bestseller Hardcover Fiction Books</h1>
      <br />

      <section className="books">
        {books.map(
          ({
            publisher,
            description,
            title,
            author,
            price,
            primary_isbn10,
            book_image,
            amazon_product_url,
          }) => (
            <article key={primary_isbn10}>
              <img src={book_image} alt={title} />
              <br />
              <br />
              <h2>{title}</h2>
              <small>Written by {author}</small>
              <br />
              <br />
              <p>{description}</p>
              <br />
              <p>Published by: {publisher}</p>
              <br />
              <a href={amazon_product_url}>Buy on Amazon</a>
            </article>
          )
        )}
      </section>
    </>
  )
}

export default App

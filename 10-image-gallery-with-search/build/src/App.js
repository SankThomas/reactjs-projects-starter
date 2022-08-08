import { useState, useEffect } from "react"

export default function App() {
  const [photos, setPhotos] = useState([])
  const [query, setQuery] = useState("landscape")

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}`
      )
      const data = await res.json()
      setPhotos(data.results)
    }

    fetchPhotos()
  }, [query])

  return (
    <>
      <h1>Image Gallery With Search</h1>
      <br />

      <input
        type="text"
        name="search"
        id="search"
        placeholder="e.g landscape"
        required
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div>
        <br />
        <h2>Showing images about "{query}"</h2>
        <br />
        <div className="photos-container">
          {photos.map((photo) => (
            <article key={photo.id}>
              <img src={photo.urls.full} alt={photo.user.username} />
              <div>
                <img
                  src={photo.user.profile_image.large}
                  alt={photo.user.username}
                  className="avatar"
                />
                <ul>
                  <li>
                    <a href={photo.user.portfolio_url}>{photo.user.name}</a>
                  </li>
                  <li>
                    <small
                      dangerouslySetInnerHTML={{ __html: photo.user.bio }}
                    ></small>
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}

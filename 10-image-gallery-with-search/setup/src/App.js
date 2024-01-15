import React, { useState, useEffect } from "react";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("landscape");

  async function getPhotos() {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=${query}`
    );
    const data = await res.json();
    setPhotos(data.results);
  }

  useEffect(() => {
    getPhotos();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    getPhotos();
  }

  return (
    <>
      <h1>Image Gallery With Search</h1>
      <br />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="e.g landscape"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </form>

      <div>
        <br />
        <h2>Showing images about "{query}"</h2>
        <br />

        {photos ? (
          <div className="photos-container">
            {photos.map((photo) => (
              <article key={photo.id}>
                <img src={photo.urls.regular} alt={photo.user.username} />

                <div>
                  {/* profile */}
                  <img
                    src={photo.user.profile_image.small}
                    alt={photo.user.username}
                    className="avatar"
                  />

                  <ul>
                    <li>
                      <a href={photo.user.portfolio_url}>
                        {photo.user.first_name}
                      </a>
                    </li>
                    <li>{photo.user.bio && <small>{photo.user.bio}</small>}</li>
                  </ul>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <h2>Failed to fetch</h2>
        )}
      </div>
    </>
  );
}

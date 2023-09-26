import { useState } from "react";
import { Image } from "cloudinary-react";
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [imageData, setImageData] = useState(null);

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", images);
    formData.append("upload_preset", "pgy3kion");

    const postImage = async () => {
      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/sankara/image/upload",
          formData,
        );
        setImageData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    postImage();
  };

  return (
    <>
      <section className="container">
        <h1>Image Upload Application</h1>
        <article>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => setImages(e.target.files[0])}
          />
          <button onClick={uploadImage}>Upload Image</button>
        </article>
        <br />

        <article>
          {imageData && (
            <Image
              cloudName="sankara"
              publicId={`https://res.cloudinary.com/sankara/image/upload/v1649427526/${imageData.public_id}`}
            />
          )}
        </article>
      </section>
    </>
  );
}

export default App;

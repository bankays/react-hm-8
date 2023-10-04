import React, { useEffect, useState } from "react";

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const albumId = localStorage.getItem("albumId");

    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => data.filter((el) => el.albumId === albumId))
      .then((filteredData) => {
        setPhotos(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="photos">
      {photos.map((photo) => (
        <div className="card p-3" style={{ width: "400px" }} key={photo.id}>
          <img src={photo.url} alt="rasm" />
          <p className="pt-2">{photo.title}</p>
        </div>
      ))}
    </div>
  );
}

export default Photos;

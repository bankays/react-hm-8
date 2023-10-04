import React, { useEffect, useState } from "react";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem("userId");

    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => data.filter((el) => el.userId == userID))
      .then((filteredData) => {
        setAlbums(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getId(id) {
    localStorage.setItem("albumId", JSON.stringify(id));
  }

  return (
    <div className="albums flex-wrap d-flex">
      {albums.map((album) => (
        <div className="  card col-4 p-3" key={album.id}>
          <p className="fw-bold">{album.title}</p>
          <a href="./photo">
            <button
              className="btn btn-info w-100"
              onClick={() => getId(album.id)}
            >
              Photos
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Albums;

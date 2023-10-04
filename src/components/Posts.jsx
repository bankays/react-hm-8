import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem("userId");

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => data.filter((el) => el.userId == userID))
      .then((filteredData) => {
        setPosts(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getId(id) {
    localStorage.setItem("postsId", JSON.stringify(id));
  }

  return (
    <div className="posts d-flex justify-content-center flex-column gap-4 mb-5 posts">
      {posts.map((post) => (
        <div className="card p-3" key={post.id}>
          <p className="fw-bold">{post.title}</p>
          <p>{post.body}</p>
          <a href="./comment">
            <button
              className="btn btn-info"
              style={{ color: "white" }}
              onClick={() => getId(post.id)}
            >
              Comments
            </button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default Posts;

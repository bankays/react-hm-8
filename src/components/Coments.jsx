import React, { useEffect, useState } from "react";

function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const postsId = localStorage.getItem("postsId");

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => data.filter((el) => el.postId == postsId))
      .then((filteredData) => {
        setComments(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="comments">
      {comments.map((comment) => (
        <div
          className="d-flex p-3 w-100 text-white justify-content-center flex-column gap-4 mb-5 commnets card bg-success"
          key={comment.id}
        >
          <p>{comment.email}</p>
          <span
            className="bg-dark w-100"
            style={{ height: "1px", marginTop: "-25px" }}
          ></span>
          <p className="fw-bold" style={{ marginTop: "-10px" }}>
            {comment.name}
          </p>
          <p style={{ marginTop: "-20px" }}>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Comments;

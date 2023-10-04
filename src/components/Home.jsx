import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function getId(id) {
    localStorage.setItem("userId", JSON.stringify(id));
  }

  return (
    <div className="users d-flex flex-wrap gap-4 justify-content-center">
      {users.map((user) => (
        <div className="card  p-4 users d-flex flex-wrap gap-4 " key={user.id}>
          <h5>{user.name}</h5>
          <p className="text-muted fs-6 fw-semibold pb-1">{user.username}</p>
          <div className="d-flex gap-1">
            <p>Email:</p>
            <a href="#" style={{ textDecoration: "none" }}>
              {user.email}
            </a>
          </div>
          <div className="d-flex gap-1">
            <p>Website:</p>
            <a href="#" style={{ textDecoration: "none" }}>
              {user.website}
            </a>
          </div>
          <div className="d-flex gap-1">
            <p>Address:</p>
            <a href="#" style={{ textDecoration: "none" }}>
              {user.address.city}, {user.address.street}
            </a>
          </div>
          <div className="d-flex gap-1">
            <p>Phone:</p>
            <a href="#" style={{ textDecoration: "none" }}>
              {user.phone}
            </a>
          </div>
          <div className="d-flex gap-3">
            <button
              className="btn btn1 btn-info"
              onClick={() => getId(user.id)}
            >
              <a
                href="./Posts"
                style={{ textDecoration: "none", color: "white" }}
              >
                Posts
              </a>
            </button>
            <button
              className="btn btn2 btn-info"
              onClick={() => getId(user.id)}
            >
              <a
                href="./todos"
                style={{ textDecoration: "none", color: "white" }}
              >
                Todos
              </a>
            </button>
            <button
              className="btn btn3 btn-info"
              onClick={() => getId(user.id)}
            >
              <a
                href="./album"
                style={{ textDecoration: "none", color: "white" }}
              >
                Album
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;

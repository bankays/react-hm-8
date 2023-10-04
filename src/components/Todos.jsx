import React, { useEffect, useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const userID = localStorage.getItem("userId");

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => data.filter((el) => el.userId == userID))
      .then((filteredData) => {
        setTodos(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div className="card" key={todo.id}>
          <div className="d-flex justify-content-between ps-3 pe-3 pt-2">
            <p>{todo.title}</p>
            <p>{todo.completed ? "✅" : "❌"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;

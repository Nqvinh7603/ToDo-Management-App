import React, { useEffect, useState } from "react";
import { retrieveAllTodosForUsername } from "../api/TodoApiService";

const ListTodosComponent = () => {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const [todos, setTodos] = useState([]);
  // const todos = [
  //   // { id: 1, description: "Learn Java", done: false, targetDate: targetDate },
  //   // { id: 2, description: "Learn Itels", done: false, targetDate: targetDate },
  //   // { id: 3, description: "Learn SQL", done: false, targetDate: targetDate },
  // ];
  useEffect(() => refreshTodos(), []);
  function refreshTodos() {
    retrieveAllTodosForUsernameApi("vinh")
      .then((response) => {
        setTodos(response.data)
      })
      .catch((error) => console.log(error));
  }
  function deleteTodo(){
    console.log("Clicked"+ id );
  }
  return (
    <div className="container">
      <h1>Việc cần làm</h1>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>STT</th>
              <th>Mô tả</th>
              <th>Đã hoàn thành</th>
              <th>Deadline</th>
              <th>Xoá</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              // eslint-disable-next-line react/jsx-key
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td><button className="btn btn-warning" onClick={() => deleteTodo{todo.id}}>Xoá </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodosComponent;

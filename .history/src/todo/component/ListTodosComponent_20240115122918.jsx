import React, { useEffect, useState } from "react";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "../api/TodoApiService";
import { useAuth } from "../security/AuthContext";

const ListTodosComponent = () => {
  const today = new Date();
  useAuth
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  
  useEffect(() => refreshTodos(), []);
  function refreshTodos() {
    retrieveAllTodosForUsernameApi("vinh")
      .then((response) => {
        setTodos(response.data)
      })
      .catch((error) => console.log(error));
  }
  function deleteTodo(id){
    console.log("Clicked"+ id );
    deleteTodoApi("vinh", id).then(
      () => {
        setMessage(`Đã xóa công việc có id = ${id} thành công`);
        refreshTodos()
      }
    ).catch(error => console.log(error));
  }
  return (
    <div className="container">
      <h1>Việc cần làm</h1>
      {message && <div className="alert alert-warning">{message}</div> }
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
                <td><button className="btn btn-warning" onClick={() => deleteTodo(todo.id)}>Xoá </button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListTodosComponent;

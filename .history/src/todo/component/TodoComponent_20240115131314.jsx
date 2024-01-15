import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "../api/TodoApiService";
import { useAuth } from "../security/AuthContext";
import { useEffect } from "react";

export default function TodoComponent(){
    const {id} = useParams();
    const []
    const authContext = useAuth()
    const username = authContext.username
    useEffect(
        () => retrieveTodos(),[id]
    )
    function retrieveTodos(){
        retrieveTodoApi(username, id).then(response => console.log(response)).catch(error => console.log(error))
    }
    return (
        <div className="container">
            <h1>Nhập việc cần làm</h1>
            <div></div>
        </div>
    );
}
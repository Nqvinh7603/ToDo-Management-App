import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "../api/TodoApiService";

export default function TodoComponent(){
    const {id} = useParams();
    function retrieveTodos(){
        retrieveTodoApi(user,name)
    }
    return (
        <div className="container">
            <h1>Nhập việc cần làm</h1>
            <div></div>
        </div>
    );
}
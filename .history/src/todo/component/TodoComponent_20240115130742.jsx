import { useParams } from "react-router-dom";

export default function TodoComponent(){
    const {id} = useParams();
    function retrieveTodos(){

    }
    return (
        <div className="container">
            <h1>Nhập việc cần làm</h1>
            <div></div>
        </div>
    );
}
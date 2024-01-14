import axios from "axios";
axios.create(
    
)
export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean');
export const retrieveHelloWorldPathVariable = (username) => axios.get(`http://localhost:8080/hello-world/path-variable/${username}`);
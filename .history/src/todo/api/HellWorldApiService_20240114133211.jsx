import axios from "axios";
const axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
);
export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean');
export const retrieveHelloWorldPathVariable = (username) => axios.get(`http://localhost:8080/hello-world/path-variable/${username}`);
import axios from "axios";
const apiClient = axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
);
export const retrieveHelloWorldBean = () => axios.get('http://localhost:8080/hello-world-bean');
export const retrieveHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`);
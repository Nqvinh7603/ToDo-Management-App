import axios from "axios";
const apiClient = axios.create(
    {
        baseURL : 'http://localhost:8080'
    }
);
export const retrieveAllTodosForUser = (username) => apiClient.get(`/hello-world/path-variable/${username}`);
import axios from "axios";
function retrieveHelloWorldBean(){
return axios.get('http://localhost:8080/hello-world-bean')
}
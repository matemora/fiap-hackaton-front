import axios from "axios";

const ApiConn = axios.create({
  baseURL: 'http://54.224.108.251:8080',
});

export default ApiConn;

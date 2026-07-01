import axios from "axios";

const API = axios.create({
  baseURL: "https://6a4526f7aab3faec3f6989fe.mockapi.io/api/v1",
});

export default API;
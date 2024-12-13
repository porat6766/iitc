import axios from "axios";

export const apiResipe = axios.create({
  baseURL: "http://localhost:3000",
});

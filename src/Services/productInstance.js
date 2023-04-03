import axios from "axios";

export const productInstance = axios.create({
    baseURL: "http://localhost:5000/water/",
    // timeout: 1000,
    // headers: {"x-Custom-Header": "foobar"}
});
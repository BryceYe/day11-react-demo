import axios from "axios";

export const api = axios.create({
    baseURL: "https://68c7ac8e5d8d9f514732873d.mockapi.io/",
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 10_000
})
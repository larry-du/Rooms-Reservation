import axios from "axios";

const API = axios.create({
  baseURL: "https://challenge.thef2e.com/api/thef2e2019/stage6",
  headers: {
    "Content-Type": "appliacation/json",
    Accept: "appliacation/json",
    Authorization:
      "Bearer Q1KZP9uRKHLWL6COiKCMD2mpnYNI7vopLEOJUvWM62sV6CQb0ht2EIedUHmD"
  }
});

export default API;

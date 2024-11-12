import axios from "axios";


const axiosInstance = axios.create({
    // baseURL: "http://localhost:4051/bank_app_api/",
    baseURL:"http://hybrid.srishticampus.in/bank_app_api/",

    headers: {
      "Content-Type": "application/json",
    },
  });
  export default axiosInstance;




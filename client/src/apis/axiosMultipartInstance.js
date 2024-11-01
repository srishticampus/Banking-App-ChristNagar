import axios from "axios";

const axiosMultipartInstance = axios.create({

    baseURL:"http://hybrid.srishticampus.in/bank_app_api/",

  // baseURL:  "http://localhost:4000/bank_app_api/",

  headers: {
    "Content-Type": "multipart/form-data", 
  },
});

export default axiosMultipartInstance;
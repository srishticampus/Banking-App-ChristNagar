import axios from "axios";

const axiosMultipartInstance = axios.create({

  // baseURL: "http://hybrid.srishticampus.in/strartup_api/",

  baseURL:  "http://localhost:4000/bank_app",

  headers: {
    "Content-Type": "multipart/form-data", 
  },
});

export default axiosMultipartInstance;
import axios from "axios";


const apiRoot = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_API_PATH,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export default apiRoot

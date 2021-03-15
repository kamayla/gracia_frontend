import axios from "axios";


const apiRoot = () => {
  return axios.create({
    baseURL: "https://localhost",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export default apiRoot

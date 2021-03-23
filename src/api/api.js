import axios from "axios";


const apiRoot = () => {
  return axios.create({
    baseURL: "https://tanp.work/",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export default apiRoot

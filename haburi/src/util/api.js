import axios from "axios";

const URL = "http://49.50.160.6:8080";

export const postReport = (params) => {
  axios
    .post(`${URL}/reportvideo`, { videoUrl: params })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

export const getVideolist = () => {
  return axios
    .get(`${URL}/videolist`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

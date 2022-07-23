import axios from "axios";

const Instance = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_OMDB_API_BASE_URL,
    params: {
      apikey: process.env.REACT_APP_OMDB_API_KEY,
    },
  });
};

export default Instance;

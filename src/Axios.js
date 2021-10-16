import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://url-shortner-api-10.herokuapp.com/api",
});

export default instance;

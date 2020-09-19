import axios from "axios";

const KEY = "AIzaSyC2ctp1-WSDQQcuhfEt93c_i89SR3jt49Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

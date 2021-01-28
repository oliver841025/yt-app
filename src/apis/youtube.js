import axios from "axios";

const KEY = "AIzaSyB-QALkpZCSpT7cDGpP8oZCihpiKRhyegU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&apikey=trilogy";

export default {
  SearchBooks: function (title) {
    return axios.get(BASEURL + title);
  },
};

import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f62c4f8166c546bd8b1ca177d6aeeae8",
  },
});

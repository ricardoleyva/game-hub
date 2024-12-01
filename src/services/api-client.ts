import axios from "axios";
const api_key: string | undefined = process.env.REACT_APP_RAWG_IO_API;
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: api_key,
  },
});

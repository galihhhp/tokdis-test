import axios from "axios";

const instance = axios.create({
  baseURL: 'https://gardien.tokodistributor.co.id/api-web/v2/',
});

export default instance;
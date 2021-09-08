import { create } from "apisauce";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
  // baseURL: 'https://csgo-u.herokuapp.com',
  // baseURL: 'http://localhost:5000',
});

export default apiClient;
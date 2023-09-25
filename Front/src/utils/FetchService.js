import axios from "axios";
import { VIDEOGAME_API_URL } from "./path";

const URL = VIDEOGAME_API_URL;

const FetchService = async (url, method = "GET", variables = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    const data = {
      headers,
      method,
    }

    if (variables) data.data = variables

    const response = await axios(`${URL}${url}`, data);

    return response.data;
  } catch (err) {
    return { error: err?.response?.data || 'ha ocurrido un error' };
  }
}

export default FetchService;

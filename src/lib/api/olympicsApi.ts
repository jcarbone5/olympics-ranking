import axios from "axios";

export const olympicsApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

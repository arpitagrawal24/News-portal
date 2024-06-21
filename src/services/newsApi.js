import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchArticles = async (category = "", page = 1, query = "") => {
  const url = `${BASE_URL}/top-headlines?country=in&category=${category}&page=${page}&q=${query}&apiKey=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.articles;
};

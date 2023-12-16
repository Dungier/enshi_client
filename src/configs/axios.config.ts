import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const $api = axios.create({
  baseURL: `${BASE_URL}/enshi_api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  },
  timeout: 0,
});

export default $api;

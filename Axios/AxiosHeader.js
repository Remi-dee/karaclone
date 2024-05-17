"use client";
import FetchUserToken from "@/utils/FetchUserToken";
import axios from "axios";
// Create an instance of Axios

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Set your API base URL
  headers: {
    "Content-Type": "application/json", // Specify the content type header
  },
  withCredentials: true, // Set credentials to true
});

//  do not Make a request with credentials enabled

export const axiosInstanceWithHeader = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Set your API base URL
  headers: {
    // Perform localStorage action
    // Authorization: `Bearer ${FetchUserToken()}`, // Setting the Authorization header with the token

    "Content-Type": "application/json", // This can be modified as necessary
  },
  // "Content-Type": "applicatfottion/json", // Example header
  withCredentials: true, // Set credentials to true
});

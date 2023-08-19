import axios, { AxiosError } from "axios";
import { errorResponse, successResponse } from "./helpers";
export const createBtlnkService = ({ apiKey, isSSL }: { apiKey: string, isSSL?: boolean }) => {
  // Disable TLS control if isSSL is false
  if (!isSSL) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  }

  // Create an Axios instance
  const axiosService = axios.create({
    baseURL: "https://api.btlnk.com/api",
    headers: { Authorization: apiKey }
  });

  // Function to create a new link
  const newLink = async ({ url }: { url: string }) => {
    if (!url) {
      throw new Error("URL is required");
    }
    try {
      const res = await axiosService.post("/link/new", { url });
      return successResponse(res);
    } catch (error) {
      errorResponse(error as AxiosError);
    }
  };

  // Function to fetch all links
  const fetchLinks = async ({ page }: { page: number }) => {
    try {
      const res = await axiosService.get(`/link/all?page=${page}`);
      return successResponse(res);
    } catch (error) {
      errorResponse(error as AxiosError);
    }
  };

  // Function to fetch link reports
  const fetchLinkReport = async ({ id, page }: { id: number, page: number }) => {
    if (page < 1) {
      throw new Error("Page must be at least 1");
    }
    if (!id) {
      throw new Error("ID is required");
    }
    try {
      const res = await axiosService.get(`/link/find/records?page=${page}&id=${id}`);
      console.log(res);
      return successResponse(res);
    } catch (error) {
      errorResponse(error as AxiosError);
    }
  };

  // Re-enable TLS control if isSSL is false
  if (!isSSL) {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
  }
  return { newLink, fetchLinks, fetchLinkReport };
};
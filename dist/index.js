"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBtlnkService = void 0;
const axios_1 = __importDefault(require("axios"));
const helpers_1 = require("./helpers");
const createBtlnkService = ({ apiKey, isSSL }) => {
    // Disable TLS control if isSSL is false
    if (!isSSL) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    }
    // Create an Axios instance
    const axiosService = axios_1.default.create({
        baseURL: "http://localhost:8089/api",
        headers: { Authorization: apiKey }
    });
    // Function to create a new link
    const newLink = async ({ url }) => {
        if (!url) {
            throw new Error("URL is required");
        }
        try {
            const res = await axiosService.post("/link/new", { url });
            return (0, helpers_1.successResponse)(res);
        }
        catch (error) {
            (0, helpers_1.errorResponse)(error);
        }
    };
    // Function to fetch all links
    const fetchLinks = async ({ page }) => {
        try {
            const res = await axiosService.get(`/link/all?page=${page}`);
            return (0, helpers_1.successResponse)(res);
        }
        catch (error) {
            (0, helpers_1.errorResponse)(error);
        }
    };
    // Function to fetch link reports
    const fetchLinkReport = async ({ id, page }) => {
        if (page < 1) {
            throw new Error("Page must be at least 1");
        }
        if (!id) {
            throw new Error("ID is required");
        }
        try {
            const res = await axiosService.get(`/link/find/records?page=${page}&id=${id}`);
            console.log(res);
            return (0, helpers_1.successResponse)(res);
        }
        catch (error) {
            (0, helpers_1.errorResponse)(error);
        }
    };
    // Re-enable TLS control if isSSL is false
    if (!isSSL) {
        process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
    }
    return { newLink, fetchLinks, fetchLinkReport };
};
exports.createBtlnkService = createBtlnkService;
// // Example usage
// const apiKey = "VlmGa4G3he6nwGs6";
// const api = createBtlnkService({ apiKey, isSSL: true });
// (async () => {
//   await api.newLink({ url: "https://example.com" })
//     .then((res) => console.log(res))
//     .catch((err) => console.log("Error:", err));
// })();

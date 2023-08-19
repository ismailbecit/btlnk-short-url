"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = exports.errorResponse = void 0;
const errorResponse = (error) => {
    throw error.response?.data;
};
exports.errorResponse = errorResponse;
const successResponse = (response) => {
    return response.data.data;
};
exports.successResponse = successResponse;

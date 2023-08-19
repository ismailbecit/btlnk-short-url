import { AxiosError, AxiosResponse } from "axios"

export const errorResponse = (error: AxiosError) => {
  throw error.response?.data
}

export const successResponse = (response: AxiosResponse) => {
  return response.data.data
}

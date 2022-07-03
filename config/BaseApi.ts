import Axios , { AxiosRequestConfig } from 'axios'
import { STORAGE_USER } from 'constants/storage.constants'
import { getStorage } from 'utils/storage.helper'

const BaseApi = (token = undefined) => {
    const isDevelopment = process.env.NODE_ENV === "development";
    
    let config: AxiosRequestConfig = {
        baseURL: process.env.NEXT_PUBLIC_GATEWAY_API,
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json'
        },
        timeout: 250000
    }

    const userToken = getStorage(STORAGE_USER)
    console.log("userToken", userToken);

    config = {
        ...config,
        headers: {
            ...config.headers,
            Authorization: `Bearer ${userToken}`
        }
    }

    const axiosInstance = Axios.create(config);

    Axios.interceptors.request.use(request => {
        if(isDevelopment) console.log("request axios", request)
        return request;
    })

    Axios.interceptors.response.use(response => {
        if(isDevelopment) console.log("response axios", response)
        return response;
    })

    return axiosInstance;
}

export default BaseApi
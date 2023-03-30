import axios, { AxiosRequestConfig } from 'axios'
import { Toast } from '@nutui/nutui-react'

export const baseUrl = 'http://localhost:3000/'

// 创建一个axios实例
export const axiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 40000,
    withCredentials: true,
})

// 定义拦截函数
axiosInstance.interceptors.response.use(
    res => {
        if (res.status !== 200) {
            Toast.fail(`服务器出错啦～状态码:${res.status}| ${res.data.message}`)
            return Promise.reject(res)
        }
        return res
    },
    err => {
        Toast.fail(`服务器出错啦～状态码:${err.status}| ${err.data.message}`)
        return Promise.reject(err)
    },
)

// 泛型接口,T的类型支持
export interface IResponseData<T = any> {
    code: number
    message?: string
    data: T
}

// 通用的请求函数 定义默认的
async function request(config: AxiosRequestConfig) {
    return axiosInstance.request<IResponseData>(config).then(res => res.data)
}

export default request

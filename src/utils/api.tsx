import request from './request'

// 发送手机号获取验证码 IResponseData定义返回类型
// export const sentVcode = (phone: number): Promise<IResponseData> => axiosInstance.get(`/captcha/sent?phone=${phone}`)
export const sentVcode = (phone: number) => request({ url: `/captcha/sent?phone=${phone}` })
// 登录
export const loginByVcode = (phone: number, vcode: string) =>
    request({ url: `/captcha/verify?phone=${phone}&captcha=${vcode}` })

// 去掉字符串的字符串
export const trimPhone = (val: string) => val.replace(/(^\s+)|(\s+$)|\s+/g, '')

import * as actionTypes from './constants'

export interface bannerType {
    url: string
    imageUrl: string
}
export const changeBannerList = (data: bannerType[]) => ({ type: actionTypes.CHANGE_BANNER, data })

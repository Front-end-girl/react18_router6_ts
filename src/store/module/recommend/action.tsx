import * as actionTypes from './constants'
import request from '@/utils/request'

export interface bannerType {
    url: string
    imageUrl: string
}
export interface recommendType {
    picUrl: string
    name: string
}

export const changeBannerList = (data: bannerType[]) => ({ type: actionTypes.CHANGE_BANNER, data })
export const changeRecommendList = (data: recommendType) => ({ type: actionTypes.CHANGE_RECOMMEND, data })

export const getBannerList = () => {
    return (dispatch: any) => {
        request({
            url: '/banner',
            method: 'get',
        })
            .then((data: any) => {
                const action = changeBannerList(data.banners)

                dispatch(action)
            })
            .catch(() => {
                console.log('轮播图数据传输错误')
            })
    }
}
export const getRecommendList = () => {
    return (dispatch: any) => {
        request({
            url: '/personalized',
            method: 'get',
        })
            .then((data: any) => {
                dispatch(changeRecommendList(data.result))
            })
            .catch(() => {
                console.log('推荐歌单数据传输错误')
            })
    }
}

/*
 * @Author: luoyunna 17666067919
 * @Date: 2023-03-29 15:25:16
 * @LastEditors: luoyunna 17666067919
 * @LastEditTime: 2023-04-06 17:44:57
 * @FilePath: \maintain_frontd:\Study\react18_router6_ts\src\store\module\recommend\reducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as actionTypes from './constants'
// immer 源码解析
import produce from 'immer'

const initialState = {
    bannerList: [],
    recomendList: [],
}

export default (state = initialState, action: any) => {
    return produce(state, draft => {
        switch (action.type) {
            case actionTypes.CHANGE_BANNER:
                draft.bannerList = action.data
            case actionTypes.CHANGE_RECOMMEND:
                draft.recomendList = action.data
            default:
                return draft
        }
    })
}

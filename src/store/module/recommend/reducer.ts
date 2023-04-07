/*
 * @Author: luoyunna 17666067919
 * @Date: 2023-03-29 15:25:16
 * @LastEditors: luoyunna 17666067919
 * @LastEditTime: 2023-04-06 17:44:57
 * @FilePath: \maintain_frontd:\Study\react18_router6_ts\src\store\module\recommend\reducer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as actionTypes from './constants'

const initialState = {
    bannerList: [],
    recomendList: [],
}

export default (state = initialState, action: any) => {
    // 使用新的地址 否则子组件dispatch 之后不更新  查看fix项目使用的插件
    const stateCopy = { ...state }

    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            stateCopy.bannerList = action.data
            return stateCopy
        case actionTypes.CHANGE_RECOMMEND:
            stateCopy.recomendList = action.data
            return stateCopy
        default:
            return stateCopy
    }
}

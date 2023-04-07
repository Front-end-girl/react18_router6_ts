import React, { useEffect } from 'react'

import styles from './index.module.less'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.less'

import { Carousel } from 'react-responsive-carousel'
import { connect } from 'react-redux'
import { getBannerList, bannerType, getRecommendList, recommendType } from '@/store/module/recommend/action'

interface IProps {
    bannerList: bannerType[]
    recomendList: recommendType[]
    getBannerDataDispatch: () => void
    getRecommendListDataDispatch: () => void
}
const Recommend = (props: IProps) => {
    // 应用store数据
    const { bannerList, getBannerDataDispatch, recomendList, getRecommendListDataDispatch } = props

    useEffect(() => {
        // 获取轮播图数据
        getBannerDataDispatch()

        // 获取推荐列表
        getRecommendListDataDispatch()
    }, [])

    return (
        <div id="recommend" className={styles['recommend']}>
            <div className={`${styles['recommend-banner']}`}>
                <Carousel
                    showArrows={false}
                    showStatus={false}
                    infiniteLoop={true}
                    stopOnHover={true}
                    showIndicators={false}
                    showThumbs={false}
                    swipeable={true}
                    dynamicHeight={false}
                    emulateTouch={true}
                    autoPlay
                >
                    {bannerList.map(i => (
                        <img src={i.imageUrl} key={i.imageUrl}></img>
                    ))}
                </Carousel>
            </div>
            <div className={styles['recommend-content-title']}>推荐歌单</div>
            <div className={styles['recommend-content']}>
                <div className={`d-flex ${styles['singers-list']}`}>
                    {recomendList.map((item, index) => (
                        <div className={styles['singers-list-item']} key={index}>
                            <img src={item.picUrl}></img>
                            <div className={styles['item-text']}>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state: any) => {
    return {
        bannerList: state.recommend.bannerList,
        userInfo: state.user.userInfo,
        recomendList: state.recommend.recomendList,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getBannerDataDispatch() {
            dispatch(getBannerList())
        },
        getRecommendListDataDispatch() {
            dispatch(getRecommendList())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)

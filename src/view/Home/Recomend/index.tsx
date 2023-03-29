import React, { useEffect, useState } from 'react'
import styles from './index.module.less'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './carousel.less'
import { Carousel } from 'react-responsive-carousel'
import { connect } from 'react-redux'
import { changeBannerList, bannerType } from '@/store/module/recommend/action'

interface IProps {
    bannerList: bannerType[]
    changeBannerList: (data: bannerType[]) => void
}
const Recommend = (props: IProps) => {
    const { bannerList, changeBannerList } = props
    const [singers] = useState([
        {
            url: 'https://p1.music.126.net/6wq2s3Rtm8aJYvAoHKmgyA==/109951163202408350.jpg?param=300x300',
            name: '我爱你  第一句是假的  第二句也是假的',
        },
        {
            url: 'https://p1.music.126.net/6wq2s3Rtm8aJYvAoHKmgyA==/109951163202408350.jpg?param=300x300',
        },
        {
            url: 'https://p1.music.126.net/6wq2s3Rtm8aJYvAoHKmgyA==/109951163202408350.jpg?param=300x300',
        },
        {
            url: 'https://p1.music.126.net/6wq2s3Rtm8aJYvAoHKmgyA==/109951163202408350.jpg?param=300x300',
        },
        {
            url: 'https://p1.music.126.net/6wq2s3Rtm8aJYvAoHKmgyA==/109951163202408350.jpg?param=300x300',
        },
    ])

    useEffect(() => {
        changeBannerList([
            {
                url: '',
                imageUrl:
                    'data:image/jpeg;base64,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',
            },
            {
                url: '',
                imageUrl:
                    'data:image/jpeg;base64,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',
            },
            {
                url: '',
                imageUrl:
                    'data:image/jpeg;base64,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',
            },
        ])
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
            <div className={styles['recommend-content']}>
                <div className={styles['recommend-content-title']}>推荐歌单</div>
                <div className={`d-flex ${styles['singers-list']}`}>
                    {singers.map((item, index) => (
                        <div className={styles['singers-list-item']} key={index}>
                            <img src={item.url}></img>
                            <div className={styles['item-text']}>{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state: any) => ({
    bannerList: state.recommend.bannerList,
})

const mapDispatchToProps = (dispatch: any) => {
    return {
        changeBannerList(data: bannerType[]) {
            dispatch(changeBannerList(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)

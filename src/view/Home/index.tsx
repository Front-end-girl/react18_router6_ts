/*
 * @Author: luoyunna 17666067919
 * @Date: 2023-03-22 14:48:31
 * @LastEditors: luoyunna 17666067919
 * @LastEditTime: 2023-04-06 17:45:29
 * @FilePath: \maintain_frontd:\Study\react18_router6_ts\src\view\Home\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import styles from './index.module.less'
import { CSSTransition } from 'react-transition-group'

import Rank from './Rank'
import Recommend from './Recomend'
import Singers from './Singers'

const PANEL = [
    {
        name: '推荐',
        component: <Recommend />,
    },
    {
        name: '歌手',
        component: <Singers />,
    },
    {
        name: '排行榜',
        component: <Rank />,
    },
]

function Home() {
    const [current, setCurrent] = useState<number>(0)
    const setPanel = (index: number) => {
        if (index > current) {
            setCssTransitionClass('push-in-right')
        } else {
            setCssTransitionClass('push-in-left')
        }
        setCurrent(index)
        setShowAnimate(true)
        setChildrenCom(PANEL[index].component)

        // 避免出现
        setTimeout(() => {
            setShowAnimate(false)
        }, 500)
    }
    const [showAnimate, setShowAnimate] = useState<boolean>(false)
    const [childrenCom, setChildrenCom] = useState(PANEL[current].component)
    const [cssTransitionClass, setCssTransitionClass] = useState('push-in-right')

    return (
        <div className={styles['home']}>
            <div className={styles['home-header']}>
                <div className={`d-flex justify-content-between ${styles['home-top']}`}>
                    <span className="iconfont menu">&#xe8c9;</span>
                    <span className="title">云音悦</span>
                    <span className="iconfont search">&#xe615;</span>
                </div>
                <div className={`d-flex align-items ${styles['home-top_navbar']}`}>
                    {PANEL.map((item, index) => (
                        <div key={item.name}>
                            <span
                                className={current === index ? styles['border-bottom'] : ''}
                                onClick={() => setPanel(index)}
                            >
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {/* 根据条件实现左右滑动 */}
            <CSSTransition timeout={500} classNames={cssTransitionClass} in={showAnimate} exit={false}>
                {childrenCom}
            </CSSTransition>
        </div>
    )
}

export default Home

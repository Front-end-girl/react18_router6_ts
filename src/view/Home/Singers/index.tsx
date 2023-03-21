import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.less'

const Singers = () => {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    return (
        <div onClick={() => back()} id="singers" className={styles['singers']}>
            我是歌手榜
        </div>
    )
}

export default Singers

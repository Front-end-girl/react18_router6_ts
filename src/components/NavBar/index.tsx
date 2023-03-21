import React from 'react'
import styles from './index.module.less'
import backImg from '@/assets/back.svg'
import { useNavigate } from 'react-router-dom'

interface IProps {
    title: string
    defaultBack: boolean
}
function NavBar(props: IProps) {
    const navigate = useNavigate()
    const back = () => {
        navigate(-1)
    }

    return (
        <div className={`${styles['nav-bar']} d-flex-center`}>
            <img src={backImg} onClick={() => back()}></img>
            <span>{props.title}</span>
        </div>
    )
}
NavBar.defaultProps = {
    title: '导航标题',
    defaultBack: true,
}

export default NavBar

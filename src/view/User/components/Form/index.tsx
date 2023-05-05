import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './index.module.less'
import weChat from '/src/assets/wechat.svg'
import sina from '/src/assets/sina.svg'
import mail from '/src/assets/mail.svg'
// 获取路由的参数
// import { useParams, useSearchParams  } from "react-router-dom";
// useParams 获取动态路由的值；
// useSearchParams 获取查询字符串的值。
// https://blog.csdn.net/weixin_44051815/article/details/121413076

function Form() {
    const [agreed, setAgreed] = useState<boolean>(false)
    const checkBoxRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    const onChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreed(e.target.checked)
    }

    const jumpToLogin = () => {
        if (!agreed) {
            checkBoxRef.current?.classList.add(styles['shake-horizontal'])
            setTimeout(() => {
                checkBoxRef.current!.classList.remove(styles['shake-horizontal'])
            }, 500)
        } else {
            // navigate('/user/inputphone', { replace: true })
            navigate('/user/inputphone')
        }
    }

    return (
        <div className={styles['login-form']}>
            <button onClick={() => jumpToLogin()}>手机号登录</button>
            <button>
                <Link to="/home">立即体验</Link>
            </button>
            <div className={`${styles['login-agree']} d-flex-center`} ref={checkBoxRef}>
                <input type="checkbox" id="tiaokuan" hidden onChange={onChangeChecked}></input>
                <label htmlFor="tiaokuan"></label>
                <span>同意</span>
                <a>《服务条款》</a>
                <span>和</span>
                <a>《隐私政策》</a>
            </div>
            <div className={`${styles['login-third']} d-flex-center justify-content-between `}>
                <img src={weChat} />
                <img src={sina} />
                <img src={mail} />
            </div>
        </div>
    )
}

export default Form

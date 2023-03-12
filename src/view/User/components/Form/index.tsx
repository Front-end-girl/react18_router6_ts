import React, { useRef, useState } from 'react'
import styles from './index.module.less'

function Form() {
    const [agreed, setAgreed] = useState<boolean>(false)
    const checkBoxRef = useRef<HTMLDivElement>(null)

    const onChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAgreed(e.target.checked)
    }

    const jumpToLogin = () => {
        if (!agreed) {
            checkBoxRef.current?.classList.add(styles['shake-horizontal'])
            setTimeout(() => {
                checkBoxRef.current!.classList.remove(styles['shake-horizontal'])
            }, 500)
        }
    }

    return (
        <div className={styles['login-form']}>
            <button onClick={jumpToLogin}>手机号登录</button>
            <button>立即体验</button>
            <div className={`${styles['login-agree']} d-flex-center`} ref={checkBoxRef}>
                <input type="checkbox" id="tiaokuan" hidden onChange={onChangeChecked}></input>
                <label htmlFor="tiaokuan"></label>
                <span>同意</span>
                <a>《服务条款》</a>
                <span>和</span>
                <a>《隐私政策》</a>
            </div>
            <div className={`${styles['login-third']} d-flex-center justify-content-between `}>
                <img src="/src/assets/wechat.svg" />
                <img src="/src/assets/sina.svg" />
                <img src="/src/assets/mail.svg" />
            </div>
        </div>
    )
}

export default Form

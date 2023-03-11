import React from 'react'
import styles from './index.module.less'

function Form() {
    return (
        <div className={styles['login-form']}>
            <button>手机号登录</button>
            <button>立即体验</button>
            <div className={`${styles['login-agree']} d-flex-center`}>
                <input type="checkbox" id="tiaokuan"></input>
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

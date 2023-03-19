import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.less'
import NavBar from '@/components/NavBar'
import { trimPhone } from '@/utils/index'

const maxLength = 4

function InputPhone() {
    const [phone, setPhone] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const sentStatus = useState<boolean>(true)
    const [vcode, setVcode] = useState('')
    const [cursorIndex, setCursorIndex] = useState(0)
    const inputCodeRef = useRef<HTMLInputElement>(null)

    const onChangePhone = (e: { target: { value: any } }) => {
        const newValue = e.target.value
        const oldValue = phone
        const result =
            newValue.length > oldValue.length
                ? e.target.value.replace(/[^\d]/gi, '').replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1 $2 $3')
                : phone.trim().slice(0, -1)

        setPhone(result)
    }

    const onChangeVcode = (e: { target: { value: any } }) => {
        if (!e.target.value) return
        const val = e.target.value

        setVcode(val)
        setCursorIndex(val.length)
    }

    useEffect(() => {
        // 延迟保证翻页动画生效
        setTimeout(() => {
            inputRef.current?.focus()
            inputCodeRef.current?.focus()
        }, 200)
    })

    return (
        <div className={styles['input-phone']}>
            <NavBar title="手机号登录"></NavBar>
            {!sentStatus ? (
                <>
                    <div className={`${styles['input-text']} d-flex-center`}>
                        <div>+86</div>
                        <input type="text" value={phone} onChange={onChangePhone} ref={inputRef} />
                    </div>
                    <button
                        className={`${styles['input-btn']} d-flex-center`}
                        disabled={trimPhone(phone).length !== 11}
                    >
                        下一步
                    </button>
                </>
            ) : (
                <div className={styles['code-styles']}>
                    <div className="d-flex">
                        <div>验证码已发送至</div>
                        <div>{phone}</div>
                    </div>
                    <div className={styles['v-code-text']}>验证码</div>
                    <div className={styles['v-code']}>
                        <input
                            type="text"
                            maxLength={maxLength}
                            id="code"
                            value={vcode}
                            onChange={onChangeVcode}
                            ref={inputCodeRef}
                        ></input>
                        {[...Array(maxLength)].map((_, idx) => (
                            <label
                                htmlFor="vcode"
                                key={idx}
                                className={`${styles['line']} ${cursorIndex === idx ? styles['animated'] : ''}`}
                            >
                                {vcode[idx]}
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
export default InputPhone

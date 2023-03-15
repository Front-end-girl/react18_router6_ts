import React, { useEffect, useRef, useState } from 'react'
import styles from './index.module.less'
import NavBar from '@/components/NavBar'

function InputPhone() {
    const [phone, setPhone] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onChangePhone = (e: { target: { value: any } }) => {
        setPhone(e.target.value)
    }

    useEffect(() => {
        inputRef.current?.focus()
    })

    return (
        <div className={styles['input-phone']}>
            <NavBar title="手机号登录"></NavBar>
            <div className={`${styles['input-text']} d-flex-center`}>
                <div>+86</div>
                <input type="text" value={phone} onChange={onChangePhone} ref={inputRef} />
            </div>
            <button className={`${styles['input-btn']} d-flex-center`} disabled={phone.length === 11}>
                下一步
            </button>
        </div>
    )
}
export default InputPhone

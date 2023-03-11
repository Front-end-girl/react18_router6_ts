import React from 'react'
import './index.less'
import logoImg from '../../../../assets/netease-logo-white.svg'

function Logo() {
    return (
        <div className="login-logo  d-flex-center ">
            <div className="login-logo__bg d-flex-center  border-radius-circle">
                <img src={logoImg} />
            </div>
        </div>
    )
}

export default Logo

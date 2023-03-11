import React from 'react'
import './index.less'
import Logo from '../components/Logo'
import Form from '../components/Form'

interface IProps {
    title: string
}
// eslint-disable-next-line no-unused-vars
function Login(props: IProps) {
    return (
        <div className="login d-flex flex-direction-column">
            <Logo></Logo>
            <Form></Form>
        </div>
    )
}
Login.defaultProps = {
    title: '',
}
export default Login

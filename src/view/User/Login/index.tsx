import React from 'react'
import './index.less'
import Logo from '../components/Logo'
import Form from '../components/Form'
import KeepAlive from 'react-activation'
// interface IProps {
//     title: string
// }
// eslint-disable-next-line no-unused-vars
// props: IProps
function Login() {
    return (
        <div className="login d-flex flex-direction-column">
            <Logo></Logo>
            <KeepAlive>
                <Form></Form>
            </KeepAlive>
        </div>
    )
}
// Login.defaultProps = {
//     title: '',
// }
export default Login

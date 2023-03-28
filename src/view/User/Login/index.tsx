import React from 'react'
import './index.less'
import Logo from '../components/Logo'
import Form from '../components/Form'
import KeepAlive from 'react-activation'
import { connect } from 'react-redux'

// interface IProps {
//     title: string
// }
// eslint-disable-next-line no-unused-vars
// props: IProps
function Login(props: any) {
    return (
        <div className="login d-flex flex-direction-column">
            {props.count}
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
// 映射Redux全局的state到组件的props上
const mapStateToProps = (state: any) => ({
    count: state.test,
})

export default connect(mapStateToProps)(Login)

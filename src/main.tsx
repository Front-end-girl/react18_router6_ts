import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/media.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-animated-router/animate.css'
import { AliveScope } from 'react-activation'
import { Provider } from 'react-redux'
import { composeStore } from './store'
import 'amfe-flexible/index.js'
import '@nutui/nutui-react/dist/style.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={composeStore}>
        <BrowserRouter>
            <AliveScope>
                <App />
            </AliveScope>
        </BrowserRouter>
    </Provider>,
)

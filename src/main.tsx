import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'react-animated-router/animate.css'
import { AliveScope } from 'react-activation'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <AliveScope>
            <App />
        </AliveScope>
    </BrowserRouter>,
)

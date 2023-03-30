import React from 'react'
import routes from '@/router'
import './app.css'

// 非动画形式
// import { useRoutes } from 'react-router-dom'
// const element = useRoutes(routes)

import { useAnimatedRoutes } from 'react-animated-router'

function App() {
    const element = useAnimatedRoutes(routes)

    return <div className="app">{element}</div>
}

export default App

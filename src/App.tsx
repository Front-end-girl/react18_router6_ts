import React from 'react'
import routes from '@/router'
import { useRoutes } from 'react-router-dom'

function App() {
    const element = useRoutes(routes)

    return <div className="app"> {element}</div>
}

export default App

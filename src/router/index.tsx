import { RouteObject, Navigate } from 'react-router-dom'
import React from 'react'

import Home from '@/view/Home'
import About from '@/view/About'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="home" />,
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
]

export default routes

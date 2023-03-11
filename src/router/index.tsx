import { RouteObject, Navigate } from 'react-router-dom'
import React from 'react'

import Login from '@/view/User/Login'
import BlankLayout from '@/layouts/BlankLayout'

const routes: RouteObject[] = [
    {
        path: '/user',
        element: <BlankLayout />,
        children: [
            {
                path: '/user/login',
                element: <Login />,
            },
        ],
    },
    {
        path: '/',
        element: <Navigate to="/user/login" />,
    },
]

export default routes

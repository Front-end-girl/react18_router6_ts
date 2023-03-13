import { RouteObject, Navigate } from 'react-router-dom'
import React from 'react'
import BlankLayout from '@/layouts/BlankLayout'

import Login from '@/view/User/Login'
import InputPhone from '@/view/User/InputPhone'

const routes: RouteObject[] = [
    {
        path: '/user',
        element: <BlankLayout />,
        children: [
            {
                path: '/user/login',
                element: <Login />,
            },
            {
                path: '/user/inputphone',
                element: <InputPhone />,
            },
        ],
    },
    {
        path: '/',
        element: <Navigate to="/user/login" />,
    },
]

export default routes

import { RouteObject, Navigate } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import BlankLayout from '@/layouts/BlankLayout'

const Login = lazy(() => import('@/view/User/Login'))

import InputPhone from '@/view/User/InputPhone'

import Home from '@/view/Home'

const routes: RouteObject[] = [
    {
        path: '/user',
        element: <BlankLayout />,
        children: [
            {
                path: '/user/login',
                element: (
                    <Suspense fallback={<div>路由加载ing...</div>}>
                        <Login />
                    </Suspense>
                ),
            },
            {
                path: '/user/inputphone',
                element: <InputPhone />,
            },
        ],
    },
    {
        path: '/home',
        element: <Home />,
    },
    {
        path: '/',
        element: <Navigate to="/user/login" />,
    },
]

export default routes

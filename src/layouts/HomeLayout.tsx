import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
    return (
        <div>
            我是首页的layout<Outlet></Outlet>
        </div>
    )
}
export default HomeLayout

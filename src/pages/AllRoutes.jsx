import React from 'react'
import { useRoutes } from 'react-router-dom';

import Home from './Home'
import About from './About'
import SignIn from './SignIn'
import NotFound from './NotFound'

const AllRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> }, 
    { path: '/about', element: <About /> },
    { path: '/signin', element: <SignIn /> },
    { path: '*', element: <NotFound /> }
  ])
  
  return routes
}

export default AllRoutes
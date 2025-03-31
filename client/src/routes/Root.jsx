import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
import React from 'react'
import App from '../App'
import RootLayout from '../layouts/RootLayout.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'

const Root = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path = '/' element={<RootLayout/>}>
            <Route path='/' element={<App/>} >
              <Route index element={<Home/>} />
              <Route path='/about' element={<About/>} />
            </Route>
        </Route>
    ))

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}
export default Root
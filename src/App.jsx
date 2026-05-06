import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Roadmap from './Pages/Roadmap'
import Contact from './Pages/Contact'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }, 
        {
          path:"/about",
          element:<About/>
        }, 
        {
          path:"/services",
          element:<Services/>
        }, 
        {
          path:"/roadmap",
          element:<Roadmap/>
        }, 
        {
          path:"/contact",
          element:<Contact/>
        }, 

      ]
    }
  ])
  

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import ErrorPage from './Components/ErrorPage'
import Home from './Pages/Home'
import About from './Pages/About'
import Services from './Pages/Services'
import Roadmap from './Pages/Roadmap'
import Contact from './Pages/Contact'
import Platform from './Pages/Platform'
import Infrastructure from './Pages/Infrastructure'
// import Docs from './Pages/Docs'
import Customers from './Pages/Customer'
import Company from './Pages/Company'
import MotionInsight from './Pages/Products'
import Developers from './Pages/Docs'

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
          path:"/platform",
          element:<Platform/>
        }, 
        {
          path:"/products",
          element:<MotionInsight/>
        }, 




        {
          path:"/infrastructure",
          element:<Infrastructure/>
        }, 
        {
          path:"/docs",
          element:<Developers/>
        }, 
        // {
        //   path:"/customers",
        //   element:<Customers/>
        // }, 
        {
          path:"/company",
          element:<Company/>
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
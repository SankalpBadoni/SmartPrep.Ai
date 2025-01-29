import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Routes/Layout/Layout'
import HomePage from './Routes/Homepage/Home'
import About from './Routes/About/About'
import Courses from './Routes/Courses/Courses'
import LeaderboardPage from './Routes/Leaderboard/Leaderboard'
import Pricing from './Routes/Pricing/Pricing'
import PricingSection from './Routes/Pricing/Pricing'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/courses",
          element: <Courses/>
        },
        {
          path: "/leaderboard",
          element: <LeaderboardPage/>
        },
        {
          path: "/pricing",
          element: <PricingSection/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App

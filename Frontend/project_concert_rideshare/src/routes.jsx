import React from "react";
import App from './components/App.jsx'
import Home from './components/Home.jsx'
import Profile from './components/Profile.jsx'
import Saved from './components/Saved.jsx'


const routes = [
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Something went wrong!</h1>,
      children : [
        {
            path: "/home",
            element: <Home/>,
            errorElement: <h1>Something went wrong!</h1>
        },
        {
            path: "/profile/:id",
            element: <Profile />,
            errorElement: <h1>Something went wrong!</h1>
        },
        {
          path: "/saved",
          element: <Saved />,
          errorElement: <h1>Something went wrong!</h1>
        },
      ]
    }
  ]

export default routes;
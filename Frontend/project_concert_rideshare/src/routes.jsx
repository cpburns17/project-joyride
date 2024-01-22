import React from "react";

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
            path: "/profile",
            element: <Profile />,
            errorElement: <h1>Something went wrong!</h1>
        },
        {
          path: "/barbershop/:id/barbers",
          element: <BarberDetails />,
          errorElement: <h1>Something went wrong!</h1>
        },
        {
          path: "/barbershop/:id/services",
          element: <Services />,
          errorElement: <h1>Something went wrong!</h1>
        },
      ]
    }
  ]

export default routes;
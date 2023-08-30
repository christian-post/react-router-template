import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import './index.css'

import Root from "./routes/root";
import Foo from "./routes/foo";
import Bar from "./routes/bar";
import ErrorPage from "./routes/error-page";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/foo",
      element: <Foo />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/bar",
      element: <Bar />,
      errorElement: <ErrorPage />,
    }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

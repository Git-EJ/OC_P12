import { createBrowserRouter, Navigate } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

const Router  = createBrowserRouter([

  // Default path
  {
    path: "/",
    element: <Navigate to="/12" replace />
  },

  //User path
  {
    path:"/:userId",
    element: <Dashboard />,
    errorElement: <Error />
  }
])

export default Router
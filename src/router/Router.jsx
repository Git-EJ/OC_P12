import { createBrowserRouter, Navigate, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";
import { useEffect } from "react";

const ErrorHandler = () => {
  const location = useLocation();
  const errorProps = location.state && location.state.errorProps;

useEffect(() => {
  console.log('%cerrorPropsROUTER', 'color: orange', errorProps);
} , [errorProps])

  return (
    <Error errorProps={errorProps} />
  )
}

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
  },

  // Error path
  {
    path: "/error/:errorCode", //errorCode = errorPropsStatus
    element: <ErrorHandler />,
  },
])

export default Router
import { createBrowserRouter, Navigate, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

const ErrorHandler = () => {
  const location = useLocation();
  const errorProps = location.state && location.state.errorProps;


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

  // Error path
  {
    path: "/error/:errorCode", //errorCode = errorPropsStatus
    element: <ErrorHandler />,
  },

  // Error path
  {
    path: "/error", //errorCode = errorPropsStatus
    element: <Error/>,
  },

  //User path
  {
    path:"/:userId",
    element: <Dashboard />,
  },

  {
    path: "*",
    element: <Navigate to="/error" />,
  },
])

export default Router
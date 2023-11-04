import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Error from "../pages/Error";

const Router  = createBrowserRouter([
  {
    path:"/:userId",
    element: <Dashboard />,
    errorElement: <Error />
  }
])

export default Router
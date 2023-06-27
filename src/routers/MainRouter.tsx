/* eslint-disable react-refresh/only-export-components */
import React, { Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import MainTemplate from "../components/template";
import NotFound from "../components/common/NotFound";
import CircularProgress from "@mui/material/CircularProgress";
import Paths from "../constants/Paths";

const Login = React.lazy(() => import("../pages/Login"));
const Home = React.lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
  { path: Paths.LOGIN, element: <Login /> },
  {
    path: Paths.ROOT,
    element: <MainTemplate />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Navigate to={Paths.HOME} />,
      },
      {
        path: Paths.HOME,
        element: (
          <Suspense fallback={<CircularProgress />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;

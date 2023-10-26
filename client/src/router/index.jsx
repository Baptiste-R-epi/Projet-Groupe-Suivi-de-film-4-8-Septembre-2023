import { createBrowserRouter } from "react-router-dom";
import baseRouter from "router/router.base";
import authRouter from "router/router.auth";
import userRouter from "router/router.user";

const routes = [
  {
    path: "/",
    children: baseRouter,
  },
  {
    path: "/auth",
    children: authRouter,
  },
  {
    path: "/user",
    children: userRouter,
  },
];

const router = createBrowserRouter(routes);

export default router;

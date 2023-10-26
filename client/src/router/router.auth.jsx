import { AuthLogin } from "pages/auth/auth.login";
import { NotFound } from "pages/error/NotFound";

const router = [
  {
    path: "login",
    element: <AuthLogin />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default router;

import { Navigate } from "react-router-dom";
import { NotFound } from "pages/error/NotFound";
import { ShowList } from "pages/shows/shows.showList";

const router = [
	{
		path: "",
		element: <Navigate to="shows" />,
	},
  {
		path: "shows",
		element: <ShowList />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

export default router;

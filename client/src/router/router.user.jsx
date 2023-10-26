import { UserShowsList } from "pages/user/user.showsList";
import { NotFound } from "pages/error/NotFound";
import { UserProfile } from "pages/user/user.profile";

const router = [
	{
		path: "shows",
		element: <UserShowsList />,
	},
	{
		path: "profile",
		element: <UserProfile />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
];

export default router;

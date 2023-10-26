const { Router } = require("express");
const routerDefault = require("./router.default");
const routerAuth = require("./router.auth");
const routerUser = require("./router.user");
const routerShows = require("./router.shows");


const router = Router();

const routes = [
	{
		path: "/auth",
		router: routerAuth,
	},
	{
		path: "/user",
		router: routerUser,
	},
	{
		path: "/shows",
		router: routerShows,
	},
	{
		path: "/",
		router: routerDefault,
	},
];

routes.forEach((route) => {
	router.use(route.path, route.router);
});

module.exports = router;

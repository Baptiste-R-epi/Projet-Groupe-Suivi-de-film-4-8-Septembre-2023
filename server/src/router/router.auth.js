const httpStatus = require("http-status");
const { Router } = require("express");
const catchAsync = require("../utils/catchAsync").default;
const axios = require("axios");

const routerAuth = Router();

routerAuth.post(
	"/login",
	catchAsync(async (req, res) => {
		const { login, password } = req.body;
		const options = {
			headers: {
				"Content-Type": "application/json",
				"X-BetaSeries-Key": process.env.CLEF_API,
			},
		};

		try {
			const APIResult = await axios.post(
				"https://api.betaseries.com/members/auth",
				{
					login,
					password,
				},
				options
			);
			return res.status(httpStatus.OK).json({
				token: APIResult.data.token,
				user: APIResult.data.user,
				message: "Connexion établie",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

routerAuth.post(
	"/disconnect",
	catchAsync(async (req, res) => {
		const { token } = req.body;
		const options = {
			headers: {
				"Content-Type": "application/json",
				"X-BetaSeries-Key": process.env.CLEF_API,
			},
		};

		try {
			await axios.post(
				"https://api.betaseries.com/members/destroy",
				{
					token
				},
				options
			);
			return res.status(httpStatus.OK).json({
				message: "Déconnexion réussie",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

module.exports = routerAuth;

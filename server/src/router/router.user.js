const httpStatus = require("http-status");
const { Router } = require("express");
const catchAsync = require("../utils/catchAsync").default;
const axios = require("axios");

const routerEpisode = require("./router.user.episode");
const routerUser = Router();

routerUser.get(
	"/shows",
	catchAsync(async (req, res) => {
		const { id } = req.query;
		const headers = {
			"Content-Type": "application/json",
			"X-BetaSeries-Key": process.env.CLEF_API,
		};
		try {
			const APIResult = await axios.get(
				`https://api.betaseries.com/shows/member`,
				{
					params: {
						id,
					},
					headers,
				}
			);
			return res.status(httpStatus.OK).json({
				shows: APIResult.data.shows,
				message: "Liste récupérée",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);
routerUser.post(
	"/addShow",
	catchAsync(async (req, res) => {
		const { id, token } = req.body;
		const options = {
			headers: {
				"Content-Type": "application/json",
				"X-BetaSeries-Key": process.env.CLEF_API,
			},
		};
		try {
			await axios.post(
				"https://api.betaseries.com/shows/show",
				{
					id,
					token,
				},
				options
			);
			return res.status(httpStatus.OK).json({
				message: "Série ajoutée à l'utilisateur",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

routerUser.post(
	"/removeShow",
	catchAsync(async (req, res) => {
		const { id, token } = req.body;
		const headers = {
			"Content-Type": "application/json",
			"X-BetaSeries-Key": process.env.CLEF_API,
		};
		try {
			await axios.delete(
				`https://api.betaseries.com/shows/show`,
				{
					data: {
						id,
						token,
					},
					headers,
				}
			);
			return res.status(httpStatus.OK).json({
				message: "Série supprimée",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

routerUser.use("/episodes", routerEpisode);

module.exports = routerUser;

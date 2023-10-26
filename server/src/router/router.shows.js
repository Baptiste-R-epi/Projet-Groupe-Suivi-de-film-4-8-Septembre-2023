const httpStatus = require("http-status");
const { Router } = require("express");
const catchAsync = require("../utils/catchAsync").default;
const axios = require("axios");

const routerShows = Router();

routerShows.get(
	"/",
	catchAsync(async (req, res) => {
		const headers = {
			"Content-Type": "application/json",
			"X-BetaSeries-Key": process.env.CLEF_API,
		};

		try {
			const APIResult = await axios.get(
				`https://api.betaseries.com/shows/discover`,
				{
					filter: "new",
					headers
				}
			);
			return res.status(httpStatus.OK).json({
				shows: APIResult.data.shows,
				message: "Liste de tous les shows récupérée",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

module.exports = routerShows;

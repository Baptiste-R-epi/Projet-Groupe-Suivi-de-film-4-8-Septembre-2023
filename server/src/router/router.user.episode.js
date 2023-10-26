const httpStatus = require("http-status");
const { Router } = require("express");
const catchAsync = require("../utils/catchAsync").default;
const axios = require("axios");

const routerUserEpisode = Router();

routerUserEpisode.get(
	"/notSeen",
	catchAsync(async (req, res) => {
		const { showId, token } = req.query;
		const headers = {
			"Content-Type": "application/json",
			"X-BetaSeries-Key": process.env.CLEF_API,
		};
		try {
			const APIResult = await axios.get(
				`https://api.betaseries.com/episodes/list`,
				{
					params: {
						showId,
						token,
					},
					headers,
				}
			);
			return res.status(httpStatus.OK).json({
				episodes: APIResult.data.shows[0].unseen,
				message: "Épisodes récupérés",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

routerUserEpisode.post(
	"/setSeen",
	catchAsync(async (req, res) => {
		const { episodeId, token } = req.body;
		const options = {
			headers: {
				"Content-Type": "application/json",
				"X-BetaSeries-Key": process.env.CLEF_API,
			},
		};
		try {
			await axios.post(
				`https://api.betaseries.com/episodes/watched`,
				{
					id: episodeId,
					token,
					bulk: false,
				},
				options,
			);
			return res.status(httpStatus.OK).json({
				message: "Épisode vu",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

routerUserEpisode.post(
	"/setAllSeen",
	catchAsync(async (req, res) => {
		const { episodeId, token } = req.body;
		const options = {
			headers: {
				"Content-Type": "application/json",
				"X-BetaSeries-Key": process.env.CLEF_API,
			},
		};
		try {
			await axios.post(
				`https://api.betaseries.com/episodes/watched`,
				{
					id: episodeId,
					token,
				},
				options,
			);
			return res.status(httpStatus.OK).json({
				message: "Épisodes vus",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

routerUserEpisode.post(
	"/setUnseen",
	catchAsync(async (req, res) => {
		const { episodeId, token } = req.body;
		const headers = {
			"Content-Type": "application/json",
			"X-BetaSeries-Key": process.env.CLEF_API,

		};
		try {
			await axios.delete(
				`https://api.betaseries.com/episodes/watched`,
				{
					data: {
						id: episodeId,
						token,
					},
					headers,
				}
			);
			return res.status(httpStatus.OK).json({
				message: "Épisode dévu",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

routerUserEpisode.post(
	"/addComment",
	catchAsync(async (req, res) => {
		const { episodeId, token, comment } = req.body;
		const options = {
			headers: {
				"Content-Type": "application/json",
				"X-BetaSeries-Key": process.env.CLEF_API,
			},
		};
		try {
			await axios.post(
				"https://api.betaseries.com/comments/comment",
				{
					type: "episode",
					id: episodeId,
					token,
					text: comment,
				},
				options
			);
			return res.status(httpStatus.OK).json({
				message: "Commentaire ajouté",
			});
		} catch (e) {
			return res.status(httpStatus.BAD_REQUEST).json({
				message: e.response.data.errors[0].text,
			});
		}
	})
);

module.exports = routerUserEpisode;

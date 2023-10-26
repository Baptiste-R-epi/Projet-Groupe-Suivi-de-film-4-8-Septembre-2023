import axios from "axios";
import {
	EPISODES_NOT_SEEN_URL,
	EPISODE_SET_SEEN_URL,
	EPISODE_SET_UNSEEN_URL,
} from "constant/api/urls";
import catchAsync from "utils/catchAsync";

export const getAllEpisodes = catchAsync(async (showId) => {
	const { token } = JSON.parse(localStorage.getItem("user"));

	const response = await axios(EPISODES_NOT_SEEN_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		params: {
			token,
			showId,
		},
	});

	return response.data;
});

export const addEpisode = catchAsync(async (showId) => {
	const { token } = JSON.parse(localStorage.getItem("user"));

	const response = await axios(`${EPISODE_SET_SEEN_URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: {
			token: token,
			id: showId,
			bulk: true,
		},
	});

	return response.data;
});

export const removeEpisode = catchAsync(async (showId) => {
	const { token } = JSON.parse(localStorage.getItem("user"));
	const response = await axios(`${EPISODE_SET_UNSEEN_URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: {
			token: token,
			id: showId,
		},
	});

	return response.data;
});

export const addComment = catchAsync(async (id, comment) => {
	const { token } = JSON.parse(localStorage.getItem("user"));
	const response = await axios(`${EPISODE_SET_SEEN_URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: {
      episodeId: id,
			comment: comment,
			token,
		},
	});

	return response.data;
});

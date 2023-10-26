import axios from "axios";
import {
	ALL_SHOWS_URL,
	USER_ADD_SHOW_URL,
	USER_REMOVE_SHOW_URL,
	USER_SHOWS_URL,
} from "constant/api/urls";
import catchAsync from "utils/catchAsync";


export const getAllUserShows = catchAsync(async ({ user, token }) => {
	const response = await axios(USER_SHOWS_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		params: {
			id: user.id,
			token: token,
		},
	});

	return response.data;
});

export const getAllShows = catchAsync(async () => {
	const response = await axios(ALL_SHOWS_URL, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	return response.data;
});

export const addShow = catchAsync(async (showId) => {
	const { token } = JSON.parse(localStorage.getItem("user"));

	const response = await axios(`${USER_ADD_SHOW_URL}`, {
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

export const removeShow = catchAsync(async (showId) => {
	const { token } = JSON.parse(localStorage.getItem("user"));
	const response = await axios(`${USER_REMOVE_SHOW_URL}`, {
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

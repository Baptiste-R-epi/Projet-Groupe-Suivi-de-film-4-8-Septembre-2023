import axios from "axios";
import { DISCONNECT_URL, LOGIN_URL } from "constant/api/urls";
import md5 from "js-md5";
import catchAsync from "utils/catchAsync";

export const login = catchAsync(async (email, password) => {
	const cryptedPassword = md5.create().update(password).hex();
	const response = await axios(LOGIN_URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: {
			login: email,
			password: cryptedPassword,
		},
	});

	return response.data;
});

export const disconnectUser = catchAsync(async () => {
  const { token } = JSON.parse(localStorage.getItem("user"));
	const response = await axios(`${DISCONNECT_URL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		data: {
			token,
		},
	});

	return response.data;
});

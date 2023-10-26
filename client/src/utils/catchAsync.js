import axios from "axios";

const catchAsync = (fn) => {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response.data.message);
      }
      throw new Error(error.message);
    }
  };
};

export default catchAsync;

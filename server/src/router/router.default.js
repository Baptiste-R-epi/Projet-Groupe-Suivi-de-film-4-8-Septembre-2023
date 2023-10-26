const httpStatus = require("http-status");
const { Router } = require("express");
const catchAsync = require("../utils/catchAsync").default;

const routerDefault = Router();

routerDefault.get(
  "/",
  catchAsync(async (req, res) => {
    res.status(httpStatus.OK).send({
      message: "Connection at Api is OK.",
      success: true,
    });
  })
);

module.exports = routerDefault;

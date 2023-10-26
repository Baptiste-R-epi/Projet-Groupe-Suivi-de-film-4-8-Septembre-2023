require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const router = require("./router");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use("/", router);

server.listen(process.env.SERVER_PORT, (err) => {
  if (err) console.log(err);

  console.log(`\n     \x1b[1m\x1b[92m${process.env.PROJECT_NAME}\x1b[0m`);
  console.log("\x1b[34m~~~~~~~~~~~~~~~~~~~~~~~~\x1b[0m");
  console.log(
    `Listening on port: \x1b[1m\x1b[92m${process.env.SERVER_PORT}\x1b[0m`
  );
  console.log("\x1b[34m~~~~~~~~~~~~~~~~~~~~~~~~\x1b[0m");
});

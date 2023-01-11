const express = require("express");

const path = require("path");
const http = require("http");
const cors = require("cors");

require("./db/mongoConnect");
const { routesInit } = require("./routes/config_route");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

routesInit(app);

const server = http.createServer(app);

let port = process.env.PORT || "3020";
server.listen(port, (error) => {
  if (error) throw new Error(error);
  console.log("listen to port " + port);
});

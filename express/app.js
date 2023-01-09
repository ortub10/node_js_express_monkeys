const express = require("express");
const path = require("path");
const http = require("http");

const { routeInit } = require("./routes/config_route");

const app = express();

const server = http.createServer(app);

let port = process.env.PORT || 3005;
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

routeInit(app);

server.listen(port, (error) => {
  if (error) throw new Error(error);
  console.log("listen to port " + port);
});

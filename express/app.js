const express = require("express");
const http = require("http");

const app = express();

const server = http.createServer(app);

let port = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.json({ msg: "express work perfect" });
});

server.listen(port, (error) => {
  if (error) throw new Error(error);
  console.log("listen to port " + port);
});

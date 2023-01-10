const express = require("express");
const path = require("path");
const http = require("http");
require("./db/mongoConnect");

const app = express();
const server = http.createServer(app);

let port = process.env.PORT || 3010;
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello " });
});

server.listen(port, (error) => {
  if (error) throw new Error(error);
  console.log("listen to port " + port);
});

const indexR = require("./index");
const usersR = require("./users");
const shopR = require("./shop");

exports.routeInit = (app) => {
  app.use("/", indexR);
  app.use("/users", usersR);
  app.use("/shop", shopR);
};

const indexR = require("./index");
const usersR = require("./users");

exports.routeInit = (app) => {
  app.use("/", indexR);
  app.use("/users", usersR);
};

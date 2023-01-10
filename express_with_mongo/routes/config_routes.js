const foodsR = require("./foods");
const usersR = require("./users");

exports.routeInit = (app) => {
  app.use("/foods", foodsR);
  app.use("/users", usersR);
};

const foodsR = require("./foods");

exports.routeInit = (app) => {
  app.use("/foods", foodsR);
};

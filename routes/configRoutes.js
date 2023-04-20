const indexR = require("./index");
const usersR = require("./users");
const categoriesR = require("./categories");
const videosR = require("./videos");




exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/categories",categoriesR);
  app.use("/videos",videosR);

  // TODO show 404 routes
}
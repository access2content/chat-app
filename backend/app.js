const express = require("express");
const app = express();
const cors = require("cors");
const { authenticate } = require("./middlewares/authentication");
const indexRoutes = require("./routes/index");

/**
 * Get the express app
 * @returns {Express} Fully configured Express app
 */
const getExpressApp = () => {
  addMiddlewares(app);
  addRoutes(app);
  return app;
};

/**
 * Add Middlewares to an application
 * @param {Express} app - The Express app
 */
const addMiddlewares = (app) => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(
    cors({
      origin: ["*"],
    })
  );
  app.use(authenticate);
};

const addRoutes = (app) => {
  app.use("/", indexRoutes);
};

module.exports = {
  getExpressApp,
};

const { getExpressApp } = require("./app");
const expressApp = getExpressApp();

const PORT = 8080;
const server = expressApp.listen(PORT, () => {
  console.log("Server started");
});

const terminateServer = () => {
  server.close(() => {
    console.log("HTTP server closed.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error(
      "Could not close connections in time, forcefully shutting down"
    );
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Shutting down gracefully");
  terminateServer();
});

process.on("SIGINT", () => {
  console.log("Received SIGINT. Shutting down gracefully");
  terminateServer();
});

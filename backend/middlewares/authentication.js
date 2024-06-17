//  TODO: Read username and password from secrets
const USERNAME = "username";
const PASSWORD = "hacking";

const authenticate = (req, res, next) => {
  //    1. Ensure Authentication Header is present
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader.indexOf("Basic ") != 0) {
    return res
      .status(401)
      .setHeader("WWW-Authenticate", "Basic")
      .json({ error: "Missing Authorization Header" });
  }

  //    2. Verify the credentials
  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  if (username != USERNAME || password != PASSWORD) {
    return res
      .status(401)
      .setHeader("WWW-Authenticate", "Basic")
      .json({ error: "Invalid Auth Credentials" });
  }

  next();
};

module.exports = {
  authenticate,
};

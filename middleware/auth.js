const jwt = require("jsonwebtoken");
const { Unauthenticated } = require("../errors/index");

const authenticationMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new Unauthenticated("No Token Provided");
  }

  const token = authHeader.split(" ")[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    console.log(decoded);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (error) {
    throw new Unauthenticated("Not authorized to access this route");
  }
};

module.exports = authenticationMiddleware;

import { verifyToken } from "./tokenService.js";

export const verifyTokenMiddleware = async (req, res , next) => {
  const authHeader = req.headers;

  if (!authHeader.token) {
    return res.status(401).json({ message: "unatuhorized" });
  }

  const accessToken = authHeader?.token?.split(" ")[1];

  const obj = verifyToken(accessToken);
  req._id = obj.id;

  next();
};

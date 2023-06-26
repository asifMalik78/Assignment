import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/envConfig.js";

export const generateToken = (id) => {
  const token = jwt.sign({ id }, JWT_SECRET, { expiresIn: "7d" });
  return token;
};

export const verifyToken = (token) => {
  const decodedToken = jwt.verify(token, JWT_SECRET);
  return decodedToken;
};

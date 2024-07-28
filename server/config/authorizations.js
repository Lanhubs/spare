import jwt from "jsonwebtoken";
import User from "../Model/User.js";
const AUTH_TOKEN = "Spare_the_User";
export const generateToken = (email, id) =>
  jwt.sign({ email, id }, AUTH_TOKEN, {
    expiresIn: "10d",
  });
export const decodeToken = (token) => {
  return jwt.verify(token, AUTH_TOKEN);
};
export const authorizeToken = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth.startsWith?.("Bearer")) {
    const token = auth?.split(" ")[1];
    const decodedToken = decodeToken(token);

    req.user = await User.findByPk(decodedToken.id);
    next();
  } else {
    res.status(401).json({ msg: "unauthorized or invalid token" });
  }
};

import jwt from "jsonwebtoken"
import { sign_key } from "../constant.js";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith("Bearer ") 
    ? authHeader.split(" ")[1] 
    : authHeader;

  if (!token) {
    return res.status(400).json({
      "error": "No Auth token detected"
    });
  }

  jwt.verify(token, sign_key, (err, decodedPayload) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    req.user = decodedPayload;
    next();
  });
}

export {
  verifyToken
}
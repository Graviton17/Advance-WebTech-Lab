import jwt from "jsonwebtoken"
import { sign_key } from "../constant.js";

const users = [
  { username: 'admin1', password: 'password123', role: 'admin' },
  { username: 'student1', password: 'password123', role: 'student' }
];

const studentLogin = (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({
      "error": "All Field are required"
    });
  }

  const user = users.find((user) => {
    return user.username === username
      && user.password === password
      && user.role === role;
  });

  if (!user) {
    return res.status(400).json({
      "error": "User doesn't exists"
    });
  }

  const token = jwt.sign({
    username,
    role
  }, sign_key, { expiresIn: '1h' })

  return res.status(200).json({
    "data": {
      token
    },
    "success": "Login Successful"
  });
}

export { studentLogin }
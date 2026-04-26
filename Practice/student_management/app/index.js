import express from "express";
import { studentLogin } from "./service/auth.js";
import { getStudentData } from "./service/student.js"
import { verifyToken } from "./middleware/verify.js";

const app = express();

app.use(express.json());

app.post("/login", studentLogin);

app.get("/student", [verifyToken], getStudentData);

app.listen(5050, (err) => {
  if (err) console.log("Error", err);
  else console.log("Server running on http://localhost:5050")
})
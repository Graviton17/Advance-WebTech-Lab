import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.send("home page")
});

app.get("/about", (req, res) => {
  const name = req.query.name;
  return res.send(`hey there ${name}`)
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

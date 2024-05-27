import express from "express";

const app = express();
const PORT = 2000;

app.get("/", (req, res) => {
  res.json({ msg: "hello wolrd" });
});

app.listen(2000, () => {
  console.log(`The server is running at http://locolhost:${2000}`);
});

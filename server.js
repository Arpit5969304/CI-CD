import express from "express";
import sum from "./sum.js";

const app = express();

app.get("/home", async (req, res) => {
  res.send("hello");
});

app.get("/sum/:a/:b", (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  res.json({
    a,
    b,
    sum: sum(a, b),
  });
});

app.listen(5000, () => {
  console.log("Listening on port 5000 🚀");
});

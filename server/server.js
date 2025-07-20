import express from "express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.get("/api/me", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, (req, res) => {
  console.log("Server started on http://127.0.0.1:5000");
});

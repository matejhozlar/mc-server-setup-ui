import express from "express";
import cors from "cors";

// routes
import configRoutes from "../routes/configRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", configRoutes);

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

export default app;

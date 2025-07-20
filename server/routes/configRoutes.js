import express from "express";
import fs from "fs";
import path from "path";

const router = express.Router();

// POST /config - receive and save config data
router.post("/config", (req, res) => {
  const configData = req.body;

  console.log("Received data:", req.body);

  if (!configData || typeof configData !== "object") {
    return res.status(400).json({ message: "Invalid config data" });
  }

  const outputPath = path.join(process.cwd(), "config.json");

  try {
    fs.writeFileSync(outputPath, JSON.stringify(configData, null, 2));
    console.log("Configuration saved successfully");
    res.status(200).json({ message: "Configuration saved successfully" });
  } catch (error) {
    console.error("Error saving config", error);
    res.status(500).json({ message: "Failed to save config" });
  }
});

export default router;

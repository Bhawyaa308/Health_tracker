import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Example API route
app.get("/", (req, res) => {
  res.send("Mindfulness API is running...");
});

// Example dummy API route for health tracking
app.get("/api/health", (req, res) => {
  res.json({ message: "Health tracking data coming soon!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// index.js
import express from "express";
import { sequelize } from "./Model/db.js"; // This will trigger the database creation and Sequelize initialization
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";
import streamRoutes from "./routes/stream.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Synchronize models
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/stream", streamRoutes);
app.use("/api/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

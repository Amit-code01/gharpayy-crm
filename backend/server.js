import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import leadRoutes from "./routes/leadRoutes.js";
import visitRoutes from "./routes/visitRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import startReminderCron from "./utils/reminderCron.js";
dotenv.config();

const app = express();

connectDB();
startReminderCron();
app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);
app.use("/api/visits", visitRoutes);
app.use("/api/dashboard", dashboardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
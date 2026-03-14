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

// connect database
connectDB();

// start cron job
startReminderCron();

/* CORS FIX */
// middlewares
app.use(
  cors({
    origin: "*",
    methods: ["GET","POST","PUT","DELETE"],
    allowedHeaders: ["Content-Type"]
  })
);
app.use(express.json());

// routes
app.use("/api/leads", leadRoutes);
app.use("/api/visits", visitRoutes);
app.use("/api/dashboard", dashboardRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Gharpayy CRM API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import express from "express";
import {
  scheduleVisit,
  getAllVisits,
  updateVisitOutcome
} from "../controllers/visitController.js";

const router = express.Router();

// schedule visit
router.post("/", scheduleVisit);

// get all visits
router.get("/", getAllVisits);

// update visit outcome
router.put("/:id", updateVisitOutcome);

export default router;
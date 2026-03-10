import Visit from "../models/Visit.js";
import Lead from "../models/Lead.js";

// Schedule Visit
export const scheduleVisit = async (req, res) => {
  try {

    const { leadId, property, visitDate } = req.body;

    const visit = await Visit.create({
      leadId,
      property,
      visitDate
    });

    // Update lead status
    await Lead.findByIdAndUpdate(leadId, {
      status: "Visit Scheduled"
    });

    res.status(201).json(visit);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all visits
export const getAllVisits = async (req, res) => {
  try {

    const visits = await Visit.find()
      .populate("leadId");

    res.json(visits);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update visit outcome
export const updateVisitOutcome = async (req, res) => {
  try {

    const { outcome } = req.body;

    const visit = await Visit.findByIdAndUpdate(
      req.params.id,
      { outcome },
      { new: true }
    );

    res.json(visit);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
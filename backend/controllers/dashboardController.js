import Lead from "../models/Lead.js";
import Visit from "../models/Visit.js";

export const getDashboardStats = async (req, res) => {
  try {

    // Total leads
    const totalLeads = await Lead.countDocuments();

    // Leads per stage
    const leadsPerStage = await Lead.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 }
        }
      }
    ]);

    // Visits scheduled
    const visitsScheduled = await Visit.countDocuments();

    // Bookings confirmed
    const bookingsConfirmed = await Lead.countDocuments({
      status: "Booked"
    });

    res.json({
      totalLeads,
      leadsPerStage,
      visitsScheduled,
      bookingsConfirmed
    });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};
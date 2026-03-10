import Lead from "../models/Lead.js";
import assignLead from "../utils/assignLead.js";

export const createLead = async (req, res) => {
  try {

    const { name, phone, source } = req.body;

    const assignedAgent = await assignLead();

    const lead = await Lead.create({
      name,
      phone,
      source,
      assignedAgent
    });

    res.status(201).json(lead);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }
};
export const updateLeadStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        status,
        updatedAt: Date.now()
      },
      { new: true }
    );

    res.json(lead);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllLeads = async (req, res) => {

  try {

    const leads = await Lead.find()
      .populate("assignedAgent");

    res.json(leads);

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  name: String,
  phone: String,
  source: String,

  status: {
    type: String,
    default: "New Lead"
  },

  assignedAgent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent"
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Lead", leadSchema);
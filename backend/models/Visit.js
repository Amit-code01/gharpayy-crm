import mongoose from "mongoose";

const visitSchema = new mongoose.Schema({

  leadId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lead"
  },

  property: String,

  visitDate: Date,

  outcome: String

});

export default mongoose.model("Visit", visitSchema);
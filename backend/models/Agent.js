import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({

  name: String,

  email: String,

  activeLeads: {
    type: Number,
    default: 0
  }

});

export default mongoose.model("Agent", agentSchema);
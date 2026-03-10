import Agent from "../models/Agent.js";

const assignLead = async () => {

  const agents = await Agent.find();

  if (agents.length === 0) return null;

  agents.sort((a, b) => a.activeLeads - b.activeLeads);

  const agent = agents[0];

  agent.activeLeads += 1;

  await agent.save();

  return agent._id;
};

export default assignLead;
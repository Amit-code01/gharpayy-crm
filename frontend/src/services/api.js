import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api"
});
export const getDashboard = () => API.get("/dashboard");
export const getLeads = () => API.get("/leads");
export const getVisits = () => API.get("/visits");
export const getAgents = ()=>API.get("/agents")
export const simulateLead = () => API.post("/leads/simulate");


export default API;
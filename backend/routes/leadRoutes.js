import express from "express";
import { createLead, updateLeadStatus,getAllLeads } from "../controllers/leadController.js";

const router = express.Router();

router.post("/", createLead);

router.put("/:id/status", updateLeadStatus);
router.get("/", getAllLeads);
router.post("/simulate", async (req,res)=>{

const lead = await Lead.create({
name:"Test Lead",
phone:"9999999999",
status:"New",
source:"Website"
})

res.json(lead)

})

export default router;
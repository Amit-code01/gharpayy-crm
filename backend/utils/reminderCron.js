import cron from "node-cron";
import Lead from "../models/Lead.js";

const startReminderCron = () => {

  console.log("Reminder Cron Started");

  cron.schedule("0 * * * *", async () => {

    console.log("Checking inactive leads...");

    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    const inactiveLeads = await Lead.find({
      updatedAt: { $lt: oneDayAgo },
      status: { $ne: "Booked" }
    });

    if (inactiveLeads.length > 0) {

      inactiveLeads.forEach((lead) => {
        console.log(`Reminder: Follow up with ${lead.name}`);
      });

    }

  });

};

export default startReminderCron;
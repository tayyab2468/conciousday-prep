import express from "express";
import EntryController from "../Controllers/Entry.Controller.js";

const router = express.Router();

// Route to create a new entry
router.post("/entries", EntryController.Enter);

// Route to get entry by date
router.get("/entries/:date", EntryController.Enterbydate);

export default router;

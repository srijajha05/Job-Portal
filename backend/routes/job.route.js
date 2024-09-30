import express from "express";

import {getJob, getJobById, getJobCreatedByAdmin, postJob} from "../controllers/job.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getJob);
router.route("/createdByAdmin").get(isAuthenticated,getJobCreatedByAdmin);
router.route("/get/:id").get(isAuthenticated,getJobById);

export default router;
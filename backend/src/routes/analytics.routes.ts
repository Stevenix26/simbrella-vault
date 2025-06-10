import express from "express";
import { requireAuth } from "../middleware/auth.middleware";
import {
  getMonthlyAnalytics,
  getWeeklyAnalytics,
  getDailyAnalytics,
} from "../controllers/analytics.controller";

const router = express.Router();

router.use(requireAuth);

router.get("/monthly", getMonthlyAnalytics);
router.get("/weekly", getWeeklyAnalytics);
router.get("/daily", getDailyAnalytics);

export default router;

import { Request, Response } from "express";
import * as AnalyticsService from "../services/analytics.service";

export const getMonthlyAnalytics = async (req: Request, res: Response) => {
  try {
    const data = await AnalyticsService.getSpendingByPeriod(req.user!.userId, "month");
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const getWeeklyAnalytics = async (req: Request, res: Response) => {
  try {
    const data = await AnalyticsService.getSpendingByPeriod(req.user!.userId, "week");
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const getDailyAnalytics = async (req: Request, res: Response) => {
  try {
    const data = await AnalyticsService.getSpendingByPeriod(req.user!.userId, "day");
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

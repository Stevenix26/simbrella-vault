import express from "express";
import { requireAuth } from "../middleware/auth.middleware";
import {
  getAvailableServices,
  payForService,
} from "../controllers/service.controller";

const router = express.Router();

router.use(requireAuth);

router.get("/", getAvailableServices);
router.post("/pay", payForService);

export default router;

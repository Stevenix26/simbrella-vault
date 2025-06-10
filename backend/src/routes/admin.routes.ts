import express from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { requireAdmin } from "../middleware/admin.middleware";
import {
  getAllUsers,
  getLogs,
  getServices,
  toggleService,
} from "../controllers/admin.controller";

const router = express.Router();
// router.use(requireAuth);
// router.use(requireAdmin);

// router.get("/users", getAllUsers);
// router.get("/services", getServices);
// router.put("/services/:serviceId/toggle", toggleService);

router.get("/users", requireAuth, requireAdmin, getAllUsers);
router.get("/services", requireAuth, requireAdmin, getServices);
router.put(
  "/services/:serviceId/toggle",
  requireAuth,
  requireAdmin,
  toggleService
);
router.get("/logs",requireAuth, requireAdmin, getLogs);


export default router;

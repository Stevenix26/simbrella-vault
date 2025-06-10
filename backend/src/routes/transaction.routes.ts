import express from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { transfer, getTransactions } from "../controllers/transaction.controller";

const router = express.Router();

router.use(requireAuth);

router.post("/transfer", transfer);
router.get("/", getTransactions);
export default router;

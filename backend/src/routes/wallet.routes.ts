import express from "express";
import { requireAuth } from "../middleware/auth.middleware";
import { createWallet, getWallets } from "../controllers/wallet.contoller";
import { setActiveWallet } from "../controllers/wallet.contoller";
import { getActiveWallet } from "../controllers/wallet.contoller";
import { topUpWallet } from "../controllers/wallet.contoller";  

const router = express.Router();

router.use(requireAuth); // protect all routes below


router.post("/", createWallet);
router.get("/", getWallets);
router.put("/active", setActiveWallet);
router.get("/active", getActiveWallet);
router.post("/topup", topUpWallet);
export default router;

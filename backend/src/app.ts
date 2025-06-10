import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import walletRoutes from "./routes/wallet.routes";
import transactionRoutes from "./routes/transaction.routes";
import analyticsRoutes from "./routes/analytics.routes"
import adminRoutes from "./routes/admin.routes"
import serviceRoutes from "./routes/service.routes"
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/wallets", walletRoutes);
app.use("/transactions", transactionRoutes);
app.use("/analytics", analyticsRoutes);
app.use("/admin", adminRoutes)
app.use("/services", serviceRoutes)
app.get("/", (req, res) => {
  res.send("Simbrella Vault Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

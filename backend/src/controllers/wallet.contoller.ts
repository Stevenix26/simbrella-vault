import { Request, Response } from "express";
import * as WalletService from "../services/wallet.service";

export const createWallet = async (req: Request, res: Response) => {
  try {
    const wallet = await WalletService.createWallet(req.user!.userId, req.body);
    res.status(201).json(wallet);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const getWallets = async (req: Request, res: Response) => {
  try {
    const wallets = await WalletService.getWallets(req.user!.userId);
    res.json(wallets);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const setActiveWallet = async (req: Request, res: Response) => {
  console.log("Incoming request body:", req.body); // 👀 Add this
  try {
    const { walletId } = req.body;
    const updated = await WalletService.setActiveWallet(
      req.user!.userId,
      walletId
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};


export const getActiveWallet = async (req: Request, res: Response) => {
  try {
    const wallets = await WalletService.getActiveWallet(req.user!.userId);
    res.json(wallets);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const topUpWallet = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const result = await WalletService.topUpWallet(req.user!.userId, amount);
    res.json({message: "Wallet topped up successfully", wallet: result});
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};


import { Request, Response } from "express";
import * as TransactionService from "../services/transaction.services";

export const transfer = async (req: Request, res: Response) => {
  try {
    const { toWalletId, amount } = req.body;
    const result = await TransactionService.transfer(
      req.user!.userId,
      toWalletId,
      amount
    );
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};
export const getTransactions = async (req: Request, res: Response) => {
  try {
    const transactions = await TransactionService.getTransactions(
      req.user!.userId
    );
    res.json(transactions);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};


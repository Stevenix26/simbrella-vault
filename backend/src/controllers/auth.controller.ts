import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";

export const signup = async (req: Request, res: Response) => {
  try {
    const user = await AuthService.signup(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const token = await AuthService.login(req.body);
    res.json({ token });
  } catch (err) {
    res.status(401).json({ error: (err as Error).message });
  }
};

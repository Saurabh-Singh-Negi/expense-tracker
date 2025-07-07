import { Request, Response } from "express";
import * as expenseService from "../services/expenseService";

export const getExpenses = async (_req: Request, res: Response) => {
  const data = await expenseService.getAllExpenses();
  res.json(data);
};

export const addExpense = async (req: Request, res: Response) => {
  const saved = await expenseService.createExpense(req.body);
  res.status(201).json(saved);
};

export const updateExpense = async (req: Request, res: Response) => {
  const updated = await expenseService.updateExpense(req.params.id, req.body);
  res.status(201).json(updated);
};

export const deleteExpense = async (req: Request, res: Response) => {
  await expenseService.deleteExpense(req.params.id);
  res.json({ message: "Deleted Successfully" });
};

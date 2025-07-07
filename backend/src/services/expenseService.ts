import Expense, { IExpense } from "../models/expenseModel";

export const getAllExpenses = async (): Promise<IExpense[]> => {
  return Expense.find().sort({ date: -1 });
};

export const createExpense = async (data: Partial<IExpense>) => {
  const expense = new Expense(data);
  return expense.save();
};

export const updateExpense = async (id: string, data: Partial<IExpense>) => {
  return Expense.findByIdAndUpdate(id, data, { new: true });
};

export const deleteExpense = async (id: string) => {
  return Expense.findByIdAndDelete(id);
};

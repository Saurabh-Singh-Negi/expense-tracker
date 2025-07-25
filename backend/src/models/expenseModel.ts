import mongoose, { Document, Schema } from "mongoose";

export interface IExpense extends Document {
  amount: number;
  category: string;
  description: string;
  date: Date;
}

const expenseSchema = new Schema<IExpense>({
  amount: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
});

export default mongoose.model<IExpense>("Expense", expenseSchema);

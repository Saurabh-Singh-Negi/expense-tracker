import express from "express";
import * as controller from "../controllers/expenseController";
import {
  createExpenseSchema,
  updateExpenseSchema,
} from "../validations/expenseValidation";
import { validate } from "../middlewares/validate";

const router = express.Router();

router.get("/", controller.getExpenses);
router.post("/", validate(createExpenseSchema), controller.addExpense);
router.put("/:id", validate(updateExpenseSchema), controller.updateExpense);
router.delete("/:id", controller.deleteExpense);

export default router;

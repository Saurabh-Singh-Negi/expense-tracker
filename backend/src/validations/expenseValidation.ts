import Joi from "joi";

export const createExpenseSchema = Joi.object({
  amount: Joi.number().required(),
  category: Joi.string().min(2).required(),
  description: Joi.string().optional().allow(""),
  date: Joi.date().optional(),
});

export const updateExpenseSchema = Joi.object({
  amount: Joi.number().required(),
  category: Joi.string().min(2).required(),
  description: Joi.string().optional().allow(""),
  date: Joi.date().optional(),
});

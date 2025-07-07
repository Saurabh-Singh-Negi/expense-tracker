import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import expenseRoutes from "./routes/expenseRoutes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5004;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

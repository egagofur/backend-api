import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRouter from "./routes/ProductRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("Server running....");
});

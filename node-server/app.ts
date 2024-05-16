import express from "express";
import morgan from "morgan";
import cors from "cors";
import chalk from "chalk";
import { connectMongoDB } from "./db/mongodb";
import { MONGO_URI } from "./utils/config";
import todoRouter from "./routes/todoRouter";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/todos", todoRouter);

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

const start = async () => {
  try {
    await connectMongoDB(String(MONGO_URI));
    console.log(chalk.magentaBright(`Connected to MongoDB.`));
    console.log("--------------------");
  } catch (error: unknown) {
    console.log("MongoDB connection error", error);
  }
};

start();

export { app };

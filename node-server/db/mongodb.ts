import mongoose from "mongoose";
import chalk from "chalk";

export const connectMongoDB = (url: string) => {
  if (process.env.NODE_ENV !== "test") {
    console.log("--------------------");
    console.log(chalk.magentaBright("..."));
  }

  return mongoose.connect(url);
};

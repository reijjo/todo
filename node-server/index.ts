import { app } from "./app";
import { PORT } from "./utils/config";
import http from "http";
import chalk from "chalk";

const server = http.createServer(app);

server.listen(PORT, () => {
  // console.log("--------------------");
  console.log(chalk.yellowBright(`ENV = '${process.env.NODE_ENV}'`));
  console.log(chalk.cyanBright(`Server on port ${PORT}`));
});

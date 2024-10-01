import express from "express";
import { logger } from "./utils/logger.util.js";
import { Connectmongo } from "./database/connection.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config({ path: "./.env" });
Connectmongo();
const app = express();

app.use((req, res, next) => {
  const method = req.method;
  const route = req.originalUrl;

  logger.info({
    message: "Request received",
    method,
    route,
  });

  next();
});

app.use(express.json());
app.use(IndexRouter);

app.listen(5001, () => {
  logger.info(`service running on port ${5001}`);
});

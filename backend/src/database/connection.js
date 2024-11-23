import mongoose from "mongoose";

import { logger } from "../utils/logger.util.js";
export const ConnectMongo = async () => {
  await mongoose.connect(process.env.DB_URL);
  logger.info("database connected");
};

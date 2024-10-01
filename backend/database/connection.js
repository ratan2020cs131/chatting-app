import mongoose from "mongoose";
import { logger } from "../utils/logger.util";
export const Connectmongo = async () => {
  await mongoose.connect(process.env.DB_URL);
  logger.info("Database Connected");
};

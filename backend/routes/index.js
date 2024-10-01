import { Router } from "express";
import { logger } from "../utils/logger.util";

const indexRoute = Router();
indexRoute.get("/", (req, res) => logger.info("Service running"));

export default indexRoute;

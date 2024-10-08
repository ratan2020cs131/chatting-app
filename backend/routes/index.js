import { Router } from "express";
import { logger } from "../utils/logger.util";

const indexRoute = Router();
indexRoute.get("/", (req, res) => logger.info("service running"));

export default indexRoute;

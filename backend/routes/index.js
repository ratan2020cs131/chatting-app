import { Router } from "express";
import { logger } from "../utils/logger.util.js";

const indexRoute = Router();
indexRoute.get("/", (req, res) => {
  req.emitSocket("message", { message: "hi i am working" });
  res.send({ message: "service running" });
});

export default indexRoute;

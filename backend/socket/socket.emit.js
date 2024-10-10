import { logger } from "../utils/logger.util.js";

export const socketEventEmitterMiddleWare = (req, res, next) => {
  req.emitSocket = (event, payload) => {
    logger.info(`event emitted ---> ${JSON.stringify({ event, payload })}`);
    req.app.get("socket").emit(event, payload);
  };
  next();
};

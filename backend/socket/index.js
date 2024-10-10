import { logger } from "../utils/logger.util.js";
import SOCKET_EVENT from "./socket.events.js";

const socketHandler = async (socket) => {
  logger.info(`socket connected ---> ${socket.id}`);

  //socket event listeners can be added here
};

export const initSocket = (io) => {
  io.on(SOCKET_EVENT.CONNECTED, socketHandler);
};

import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

import { ConnectMongo } from "./database/connection.js";
import indexRoute from "./routes/index.js";
import { initSocket } from "./socket/index.js";
import { socketEventEmitterMiddleWare } from "./socket/socket.emit.js";
import { logger, logRequests } from "./utils/logger.util.js";

dotenv.config({ path: "./.env" });

ConnectMongo();

const app = express();
const server = createServer(app);
const Socket = new Server(server);
app.set("socket", Socket);
initSocket(Socket);

app.use(socketEventEmitterMiddleWare);
app.use(logRequests);

app.use(express.json());
app.use(indexRoute);

server.listen(process.env.PORT, () => {
  logger.info(`service running on port ${process.env.PORT}`);
});

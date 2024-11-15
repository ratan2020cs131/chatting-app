import { createLogger, format, transports } from "winston";
const { combine, timestamp, printf, colorize } = format;

// Custom log format: [DD-MM-YYYY hh:mm:ss] - [HTTP METHOD] - /route - "message here"
const customFormat = printf(({ message, timestamp, method, route }) => {
  return `${timestamp} - ${method ? method + " - " : ""}${route ? route + " - " : ""}${
    message ? message : ""
  }`;
});

// Create the logger with automatic timestamp, HTTP method, and route formatting
export const logger = createLogger({
  level: "info", // Set the default logging level
  format: combine(
    colorize({ all: true }),
    timestamp({ format: "DD-MM-YYYY HH:mm:ss" }), // Automatically generate timestamp
    customFormat
  ),
  transports: [
    new transports.Console(), // Log to console
  ],
});

// Middleware to log incoming requests
export const logRequests = (req, res, next) => {
  const method = req.method;
  const route = req.originalUrl;

  logger.info({
    method,
    route,
  });

  next();
};

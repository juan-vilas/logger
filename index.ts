import { format, createLogger, transports } from "winston";

const logFormat = format.printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.ms" }),
    logFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: "error.log",
      level: "error",
    }),
  ],
});

export default logger;

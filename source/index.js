"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const logFormat = winston_1.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
const logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss.ms" }), logFormat),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({
            filename: "error.log",
            level: "error",
        }),
    ],
});
exports.default = logger;

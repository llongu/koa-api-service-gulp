const { join } = require('path')
import { configure, getLogger } from "log4js";
const logger = getLogger();
export default function (app) {
  app.context.logger = logger;
  configure({
    appenders: { cheese: { type: "file", filename: join(__dirname, '../../', 'logs/index.log') } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
  });

  // error-handling
  process.on("uncaughtException", function (err) {
    logger.error(err);
  })
  process.on("unhandledRejection", function (info) {
    logger.error(info.reason);
  });
  app.on("error", function (err) {
    logger.error(info.reason);
  })
}

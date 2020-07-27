const { join } = require('path')
import { createContainer, Lifetime } from "awilix";
import { loadControllers, scopePerRequest } from "awilix-koa";
export default function (app) {
  const container = createContainer();
  container.loadModules([join(__dirname, '../', "services/*.js")], {
    formatName: "camelCase",
    resolverOptions: {
      lifetime: Lifetime.SCOPED
    }
  });
  // loadControllers
  app.use(scopePerRequest(container));
  app.use(loadControllers(join(__dirname, '../', "controllers/*.js")));
} 
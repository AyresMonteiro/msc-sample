import fs from "fs";

import { Router } from "express";
import { Controller } from "../@types/archictecture";

interface ControllerStructure {
  path: string;
  object: Controller;
}

const files = fs
  .readdirSync(__dirname)
  .filter((file) => !["index.ts", "index.js"].includes(file));

const controllers: ControllerStructure[] = files.map((file) => ({
  path: file.split(".")[0],
  object: require(`./${file}`).default,
}));

const baseRouter = Router();

controllers.forEach((controller) => {
  const router = Router();

  router.get("/", controller.object.get);
  router.get("/:id", controller.object.findById);
  router.post("/", controller.object.create);
  router.put("/:id", controller.object.update);
  router.delete("/:id", controller.object.delete);

  baseRouter.use(`/${controller.path}`, router);
});

export default baseRouter;

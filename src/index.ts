import express from "express";

import router from "./controllers";
import { initDatabase } from "./models";

initDatabase().then(() => {
  const app = express();

  app.use(express.json());

  app.use((req, res, next) => {
    console.log("Accessed:", `[${req.method}] ${req.path}`);

    next();
  });

  app.use("/api", router);

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});

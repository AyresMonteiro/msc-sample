import mongoose from "mongoose";

import { MongoMemoryServer } from "mongodb-memory-server";

export async function initDatabase() {
  const memoryServer = await MongoMemoryServer.create({
    binary: {
      version: "6.0.2",
    },
  });

  mongoose.set("strictQuery", true);

  await mongoose.connect(memoryServer.getUri());

  console.log("Database connected");
}

export * from "./car";

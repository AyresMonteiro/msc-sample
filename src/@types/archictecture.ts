import { Handler } from "express";

export interface Controller {
  get: Handler;
  findById: Handler;
  create: Handler;
  update: Handler;
  delete: Handler;
}

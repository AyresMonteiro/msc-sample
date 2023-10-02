import fs from "fs";
import { CarService } from "./car";

const files = fs
  .readdirSync(__dirname)
  .filter((file) => !["index.ts", "index.js"].includes(file));

const services = files.reduce((prev, file) => {
  const name = file
    .split(".")[0]
    .split("_")
    .map((word, index) => {
      if (index === 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join("");

  return {
    ...prev,
    [name + "Service"]: require(`./${file}`).default,
  };
}, {}) as {
  carService: CarService;
};

export default services;

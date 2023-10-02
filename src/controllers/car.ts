import { Controller } from "../@types/archictecture";

import services from "../services";

const carService = services.carService;

class CarController implements Controller {
  async get(req, res) {
    const cars = await carService.get();

    return res.status(200).json(cars);
  }

  async findById(req, res) {
    const car = await carService.findById(req.params.id);

    if (!car) return res.status(404).json({ error: "Car not found" });

    return res.status(200).json(car);
  }

  async create(req, res) {
    const car = await carService.create(req.body);

    return res.status(201).json(car);
  }

  async update(req, res) {
    const car = await carService.update(req.params.id, req.body);

    if (!car) return res.status(404).json({ error: "Car not found" });

    return res.status(200).json(car);
  }

  async delete(req, res) {
    const deleted = await carService.delete(req.params.id);

    if (!deleted) return res.status(404).json({ error: "Car not found" });

    return res.status(200).json({ message: "Car deleted" });
  }
}

export default new CarController();

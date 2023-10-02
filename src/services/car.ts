import { Car, CarModel } from "../models/car";

export class CarService {
  async get() {
    return CarModel.find();
  }

  async findById(id: string) {
    return CarModel.findById(id);
  }

  async create(car: Car) {
    return CarModel.create(car);
  }

  async update(id: string, data: Car) {
    const car = await CarModel.findByIdAndUpdate(id, data, { new: true });

    if (!car) return undefined;

    return car;
  }

  async delete(id: string) {
    const car = await CarModel.findByIdAndDelete(id);

    if (!car) return false;

    return true;
  }
}

const carService = new CarService();

export default carService;

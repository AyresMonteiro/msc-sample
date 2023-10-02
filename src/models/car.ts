import mongoose, { Schema } from "mongoose";

export interface Car {
  model: string;
  year: number;
  rate: number;
}

const carSchema = new Schema(
  {
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const CarModel = mongoose.model<Car>("Car", carSchema);

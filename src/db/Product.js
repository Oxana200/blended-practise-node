import { Schema } from 'mongoose';

const productsSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    category: {
      type: String,
      require: true,
      enum: ['books', 'electronics', 'clothing', 'other'],
      default: 'other',
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

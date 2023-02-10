import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  newProduct: {
    type: String,
  },
});

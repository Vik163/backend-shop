import { Document } from 'mongoose';

export interface CardItem extends Document {
  readonly image: string;
  readonly description: string;
  readonly name: string;
  readonly price: number;
}

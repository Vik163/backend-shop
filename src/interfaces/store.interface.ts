import { Document } from 'mongoose';

export interface Card extends Document {
  readonly image: string;
  readonly description: string;
  readonly name: string;
  readonly price: number;
}

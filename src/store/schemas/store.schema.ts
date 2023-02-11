import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type CardDocument = HydratedDocument<Card>;

@Schema()
export class Card {
  @Prop()
  image: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  newProduct: string;
  @Prop()
  price: number;
}

export const CardSchema = SchemaFactory.createForClass(Card);

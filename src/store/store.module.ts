import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StoreController } from './store.controller';
import { StoreService } from './store.service';
import { CardSchema } from '../schemas/store.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Card', schema: CardSchema }])],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}

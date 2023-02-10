import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Card } from '../interfaces/store.interface';

@Injectable()
export class StoreService {
  constructor(@InjectModel('Card') private readonly cardModel: Model<Card>) {}
  async getCards(): Promise<Card[]> {
    const cards = await this.cardModel.find().exec();
    return cards;
  }
}

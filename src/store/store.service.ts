import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { CardItem } from './interfaces/store.interface';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { Card, CardDocument } from './schemas/store.schema';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Card.name) private readonly cardModel: Model<CardDocument>,
  ) {}

  async getCards(): Promise<CardItem[]> {
    return this.cardModel.find().exec();
  }

  async addCard(createCardDTO: CreateCardDto): Promise<CardItem> {
    const newCard = new this.cardModel(createCardDTO);
    return newCard.save();
  }

  async remove(id: string): Promise<CardItem> {
    return this.cardModel.findByIdAndRemove(id);
  }

  async updateCard(
    id: string,
    updateCardDto: UpdateCardDto,
  ): Promise<CardItem> {
    return this.cardModel.findByIdAndUpdate(id, updateCardDto, { new: true });
  }
}

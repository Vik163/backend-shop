import {
  Controller,
  Get,
  HttpStatus,
  Logger,
  Body,
  Post,
  HttpCode,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { CardItem } from './interfaces/store.interface';
import { StoreService } from './store.service';

@Controller('cards')
export class StoreController {
  logger: Logger;
  constructor(private readonly storeService: StoreService) {
    this.logger = new Logger();
  }

  @Get()
  getCards(): Promise<CardItem[]> {
    return this.storeService.getCards();
    // this.logger.log(cards);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  addCard(@Body() createCardDto: CreateCardDto): Promise<CardItem> {
    return this.storeService.addCard(createCardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<CardItem> {
    return this.storeService.remove(id);
  }

  @Put(':id')
  updateCard(
    @Body() updateCardDto: UpdateCardDto,
    @Param('id') id: string,
  ): Promise<CardItem> {
    return this.storeService.updateCard(id, updateCardDto);
  }
}

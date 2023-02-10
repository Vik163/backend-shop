import { Controller, Get, Res, HttpStatus, Logger } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('cards')
export class StoreController {
  logger: Logger;
  constructor(private readonly storeService: StoreService) {
    this.logger = new Logger();
  }

  @Get()
  async getCards(@Res() res) {
    const cards = await this.storeService.getCards();
    // this.logger.log(cards);

    return res.status(HttpStatus.OK).json(cards);
  }
}

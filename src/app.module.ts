import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

import { StoreModule } from './store/store.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/storedb', {
      useNewUrlParser: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/images_pizza'),
    }),
    StoreModule,
  ],
})
export class AppModule {}

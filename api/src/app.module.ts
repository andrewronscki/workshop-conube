import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CreateOrder } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CreateOrder],
})
export class AppModule {}

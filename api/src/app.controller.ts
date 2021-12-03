import { Body, Controller, Post } from '@nestjs/common';
import { v4 } from 'uuid';
import { CreateOrder } from './app.service';
import { CreateOrderDto } from './dtos/create-order.dto';

@Controller()
export class AppController {
  constructor(private readonly createOrderService: CreateOrder) {}

  @Post()
  async createOrder(@Body() payload: CreateOrderDto): Promise<string> {
    const customerId = v4();

    try {
      await this.createOrderService.execute(customerId, payload.items);
      return 'Ordem de compra criada com sucesso!';
    } catch {
      throw new Error('Deu ruim.');
    }
  }
}

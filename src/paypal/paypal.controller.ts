import { Controller, Get, Param, Query } from '@nestjs/common';
import { PaypalService } from './paypal.service';

@Controller('paypal')
export class PaypalController {
  constructor(private paypalService: PaypalService) {}

  @Get('create-order')
  async createSubscriptionOrder() {
    // @Body() paymentDetails: any,
    const url = await this.paypalService.createOrder();
    // console.log('createOrder url', url);
    return url;
  }

  @Get('create-payment_for_the_order/:id')
  async createSubscriptionPayment(@Param('id') id: string) {
    // @Body() paymentDetails: any,
    console.log('query', id);
    return await this.paypalService.createPayment(id);
  }
}

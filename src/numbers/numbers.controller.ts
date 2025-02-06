import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { NumbersService } from './numbers.service';

@Controller('api/classify-number')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Get()
  async findAll(@Query('number') number: string | number) {
    // console.log("number: ", number)
    // console.log("typeof number: ", typeof number)
    if (!number || isNaN(number as number)) {
      throw new BadRequestException({
        error: true,
        number: number,
      });
    }
    return await this.numbersService.classify(number as number);
  }
}

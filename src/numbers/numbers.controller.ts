import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';

@Controller('api/classify-number')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Get()
  async findAll(@Param('number') number: number) {
    return await this.numbersService.classify(number);
  }
}

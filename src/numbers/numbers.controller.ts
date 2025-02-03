import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { NumbersService } from './numbers.service';
import { CreateNumberDto } from './dto/create-number.dto';
import { UpdateNumberDto } from './dto/update-number.dto';

@Controller('api/classify-number')
export class NumbersController {
  constructor(private readonly numbersService: NumbersService) {}

  @Get()
  async findAll(@Query('number') number: number) {
    // console.log("number: ", number)
    // console.log("typeof number: ", typeof number)
    return await this.numbersService.classify(number);
  }
}

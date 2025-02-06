import { Injectable } from '@nestjs/common';
import { CreateNumberDto } from './dto/create-number.dto';

@Injectable()
export class NumbersService {
  async classify(number: number): Promise<CreateNumberDto> {
    const num = number > 0 ? number : -number;
    const response: CreateNumberDto = {
      number: number,
      is_prime: this.isPrime(number),
      is_perfect: this.isPerfect(num),
      properties: this.classifyProperties(num),
      digit_sum: this.digitSum(num),
      fun_fact: (await this.getFunFact(num)) as string,
    };

    return response;
  }

  async getFunFact(number: number): Promise<string | void> {
    const data = await fetch(`http://numbersapi.com/${number}/math`);

      if (data.ok) {
      const response = await data.text();
      // console.log(response);
      return response;
    }
  }

  classifyProperties(number: number): string[] {
    const properties: string[] = [];

    if (this.isArmstrongNumber(number)) properties.push('armstrong');
    properties.push(number % 2 === 0 ? 'even' : 'odd');

    return properties;
  }

  isArmstrongNumber(num: number): boolean {
    const digits = num.toString().split('').map(Number); // Convert number to array of digits
    const power = digits.length; // Number of digits
    const sum = digits.reduce((acc, digit) => acc + Math.pow(digit, power), 0); // Sum of digits raised to power

    return sum === num; // Check if sum equals original number
  }

  digitSum(num: number): number {
    const digits = num.toString().split('').map(Number); // Convert number to array of digits
    return digits.reduce((a, b) => a + b, 0); // Return sum ofdigits in array
  }

  isPrime(number: number): boolean {
    if (number <= 1) return false;
    if (number == 2 || number == 3) return true;
    for (let i = 2; i <= Math.sqrt(number) + 1; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  isPerfect(number: number): boolean {
    const divisors: number[] = [1];

    for (let i = 2; i < number; i++) {
      if (number % i === 0) divisors.push(i);
    }
    return divisors.reduce((a, b) => a + b, 0) === number;
  }
}

export class CreateNumberDto {
    number: number;
    is_prime: boolean;
    is_perfect: boolean;
    properties: Array<string>;
    digit_sum: number;
    fun_fact: Promise<string>;
}

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Conversor API')
@Controller('teste')
export class ConversorController {
    constructor() {}

    // Exemplo de um endpoint GET
    @Get()
getHello(): { message: string } {
    return { message: 'Hello, this is a test API!2' };
}
}

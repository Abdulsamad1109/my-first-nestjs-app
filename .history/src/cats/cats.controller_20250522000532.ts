import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

    constructor (private readonly )
    @Get()
    getCats(): string {
        return 'Meow! Here are your cute cats.'
    }
}

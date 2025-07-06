import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {

    constructor ()
    @Get()
    getCats(): string {
        return 'Meow! Here are your cute cats.'
    }
}

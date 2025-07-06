import { Controller } from '@nestjs/common';
import { get } from 'http';

@Controller('cats')
export class CatsController {
    @get
}

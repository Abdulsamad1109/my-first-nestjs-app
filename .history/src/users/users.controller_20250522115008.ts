import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST / users
    PATCH /user/:id
    DELETE /user/:id
    */

    @Get() // GET /users
    findAll() {
        return []
    }

    @Get(':id') // GET /users:id
    FindOne()
}

import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*

    POST / users
    PATCH /user/:id
    DELETE /user/:id
    */

    @Get() // GET /users
    findAll() {
        return []
    }

    @Get(':id') // GET /users:id
    FindOne(@Param('id') id: string) {
        return { id }
    }

    @Post() // POST /users
    cret 
}

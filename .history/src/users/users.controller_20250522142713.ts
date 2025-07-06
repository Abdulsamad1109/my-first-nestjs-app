import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    /*
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
    create(@Body() user: {}) {
        return user
    } 

    @Patch(':id') // PATCH /users:id
    (@Param('id') id: string) {
        return { id }
    }
}

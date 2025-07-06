import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService = UsersService) {}

    @Get() // GET /users or /users?role=value
    findAll(@Query('role') role?: 'ADMIN' | 'MEMBER' ) {
        return this.use
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
    update(@Param('id') id: string, @Body() updateUser: {} ) {
        return {id, ...updateUser}
    }

    @Delete(':id') // DELETE /users:id
    delete(@Param('id') id: string, @Body() deletUser: {}) {
        return { id }
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService: UsersService) {}

    @Get()
    findAll(@Query('role') role?: 'ADMIN' | 'MEMBER' ) {
        return this.usersService.findAll()
    }

    @Get(':id') 
    FindOne(@Param('id') id: string) {
        return this.usersService.findOne(+id)
    }

    @Post() // POST /users
    create(@Body() user: { username: string, displayName: string, password: string}) {
        return this.usersService.create(user)
    } 

    @Patch(':id') // PATCH /users:id
    update(@Param('id') id: string, @Body() updatedUser: { username?: string, displayName?: string, password?: string }) {
        return this.usersService.update(+id, updatedUser)
    }

    @Delete(':id') // DELETE /users:id
    delete(@Param('id') id: string, @Body() deletUser: {}) {
        return { id }
    }
}

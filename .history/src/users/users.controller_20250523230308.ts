import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService: UsersService) {}

    @Get()
    findAll(@Query('role') role?: 'ADMIN' | 'MEMBER' ) {
        return this.usersService.findAll()
    }

    @Get(':id') 
    FindOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post()
    create(@Body() user: { username: string, displayName: string, password: string}) {
        return this.usersService.create(user)
    } 

    @Patch(':id', ParseIntPipe)
    update(@Param('id') id: number, @Body() updatedUser: { username?: string, displayName?: string, password?: string }) {
        return this.usersService.update(+id, updatedUser)
    }

    @Delete(':id')
    delete(@Param('id') id: string, @Body() deletUser: {}) {
        return { id }
    }
}

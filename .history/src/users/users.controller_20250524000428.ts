import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService: UsersService) {}

    @Get()
    findAll(@Query('role') role?: 'ADMIN' | "ENGINEER" | 'MEMBER' ) {
        return this.usersService.findAll(ROLE)
    }

    @Get(':id') 
    FindOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post()
    create(@Body() user: { username: string, displayName: string, password: string, role:
        "ADMIN" | "ENGINEER" | "MEMBER"}) {
        return this.usersService.create(user)
    } 

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updatedUser: { username?: string, displayName?: string, password?: string,
        role?: "ADMIN" | "ENGINEER" | "MEMBER" }) {
        return this.usersService.update(id, updatedUser)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number, @Body() deletUser: {}) {
        return this.usersService.delete(id)
    }
}

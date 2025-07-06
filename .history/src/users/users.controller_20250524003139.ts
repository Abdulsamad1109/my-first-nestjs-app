import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user-dto';
import { UpdatedUserDto } from './DTO/update-user-dto';

@Controller('users')
export class UsersController {

    constructor( private readonly usersService: UsersService) {}

    @Get()
    findAll(@Query('role') role?: 'ADMIN' | "ENGINEER" | 'MEMBER' ) {
        return this.usersService.findAll(role)
    }

    @Get(':id') 
    FindOne(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto)
    } 

    @Patch(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() updatedUser: UpdatedUserDto) {
        return this.usersService.update(id, updatedUser)
    }

    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number, @Body() deletUser: {}) {
        return this.usersService.delete(id)
    }
}

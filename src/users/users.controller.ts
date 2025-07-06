// import { Body, Controller, Delete, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { UpdateUserDto } from './dto/update-user-dto';
// import { AuthGuard } from '@nestjs/passport';

// @Controller('users')
// export class UsersController {

//     constructor( private readonly usersService: UsersService) {}

//     @Get()
//     @UseGuards(AuthGuard())
//     findAll(@Query('role') role?: 'ADMIN' | "ENGINEER" | 'MEMBER' ) {
//         return this.usersService.findAll(role)
//     }

//     @Get(':id') 
//     @UseGuards(AuthGuard())
//     FindOne(@Param('id') id: string) {
//         return this.usersService.findOne(id)
//     }

//     @Patch(':id')
//     update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
//         return this.usersService.update(id, updateUserDto)
//     }

//     @Delete(':id')
//     delete(@Param('id') id: string) {
//         return this.usersService.delete(id)
//     }
// }

// import { Injectable } from '@nestjs/common';
// import { UpdateUserDto } from './dto/update-user-dto';
// import { NotFoundException } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User } from 'src/schemas/users.schema';

// @Injectable()
// export class UsersService {

//     constructor(@InjectModel(User.name) private userModel: Model<User>) {}

//     async findAll(role?: "ADMIN" | "ENGINEER" | "MEMBER") {
//     const filter = role ? { role } : {};
//     const users = await this.userModel.find(filter);

//     if (role && users.length === 0) {
//         throw new NotFoundException(`No users found with role: ${role}`);
//     }

//     return users;
//     }

//     async findOne(id: string) {
//         const foundUser = await this.userModel.findOne({_id: id})
//         if (!foundUser) throw new NotFoundException('user not found')
//         return foundUser
//     }

//     async update(id: string, updateUserDto: UpdateUserDto) {
//         console.log('Updating user:', id, updateUserDto);
//         return await this.userModel.findByIdAndUpdate(id, updateUserDto, {new: true})
        
//     }

//     async delete(id: string) {
//         return await this.userModel.findByIdAndDelete(id)
//     } 

// }


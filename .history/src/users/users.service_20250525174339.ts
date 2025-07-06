import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user-dto';
import { UpdateUserDto } from './DTO/update-user-dto';
import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User.name) private userModel: Model<User>) {}

    async findAll(role?: "ADMIN" | "ENGINEER" | "MEMBER") {
    const filter = role ? { role } : {};
    const users = await this.userModel.find(filter);

    if (role && users.length === 0) {
        throw new NotFoundException(`No users found with role: ${role}`);
    }

    return users;
    }

    async findOne(id: string) {
        const foundUser = await this.userModel.findOne({_id: id})
        if (!foundUser) throw new NotFoundException('user not found')
        return foundUser
    }

    create(createUserDto: CreateUserDto) {
        const newUser = new this
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if(user. id === id){
                return {...user, ...updateUserDto}
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number) {
        const removedUser = this.findOne(id)
        this.users = this.users.filter(user => user.id !== id)
        return removedUser
    } 

}


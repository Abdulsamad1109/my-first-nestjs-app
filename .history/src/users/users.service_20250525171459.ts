import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user-dto';
import { UpdateUserDto } from './DTO/update-user-dto';
import { NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {

    constructor(@InjectModel('User') private userModel: Model<User[]>) {}

    findAll(role? : "ADMIN" |"ENGINEER" | "MEMBER") {
        if(role){
            const rolesArray = this.userModel.filter(user => user.role === role)
            if(rolesArray.length === 0)
                throw new NotFoundException('user role not found ')
            return rolesArray
        }
        return this.users
    }

    findOne(id: number) {
        const foundUser = this.userModel.findOne( id: id)
        if (!foundUser) throw new NotFoundException('user not found')
        return foundUser
    }

    create(createUserDto: CreateUserDto) {
        const newUser = {
            id: this.users.length + 1,
            ...createUserDto
        }
        this.users.push(newUser)
        return newUser
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


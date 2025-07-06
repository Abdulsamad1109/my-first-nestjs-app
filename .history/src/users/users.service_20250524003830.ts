import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './DTO/create-user-dto';
import { UpdateUserDto } from './DTO/update-user-dto';

@Injectable()
export class UsersService {

    private users = [
	    { id: 1, username: "anson", email: "Anson@me.com", password: "hello123", role: "MEMBER" },
	    { id: 2, username: "jack", email: "Jack@me.com", password: "hello124", role: "MEMBER" },
	    { id: 3, username: "adam", email: "Adam@me.com", password: "hellohello", role: "ADMIN" },
	    { id: 4, username: "tina", email: "Tina@me.com", password: "test123", role: "ENGINEER" },
	    { id: 5, username: "jason", email: "Jason@me.com", password: "hello123", role: "ADMIN" },
	    { id: 6, username: "henry", email: "Henr@me.com", password: "hello123", role: "ENGINEER" },
	    { id: 7, username: "marilyn", email: "Mariyn@me.com", password: "hello123", role: "ADMIN" },
    ];

    findAll(role? : "ADMIN" |"ENGINEER" | "MEMBER") {
        if(role){
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number) {
        const foundUser = this.users.find(user => user.id === id)
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

    update(id: number, updatUser: C) {
        this.users = this.users.map(user => {
            if(user. id === id){
                return {...user, ...updatUser}
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


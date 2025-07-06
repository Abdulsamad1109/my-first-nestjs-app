import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
	    { id: 1, username: "anson", : "Anson", password: "hello123", role: "MEMBER" },
	    { id: 2, username: "jack", : "Jack", password: "hello124", role: "MEMBER" },
	    { id: 3, username: "adam", : "Adam", password: "hellohello", role: "ADMIN" },
	    { id: 4, username: "tina", : "Tina", password: "test123", role: "ENGINEER" },
	    { id: 5, username: "jason", : "Jason", password: "hello123", role: "ADMIN" },
	    { id: 6, username: "henry", : "Henry", password: "hello123", role: "ENGINEER" },
	    { id: 7, username: "marilyn", : "Marilyn", password: "hello123", role: "ADMIN" },
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

    create(user:{ username: string, : string, password: string, role: "ADMIN" |
        "ENGINEER" | "MEMBER" }) {
        const newUser = {
            id: this.users.length + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatUser: { username?: string, ?: string, password?: string, role?: 
        "ADMIN" | "ENGINEER" | "MEMBER"}) {
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


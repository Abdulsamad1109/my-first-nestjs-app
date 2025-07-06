import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
	    { id: 1, username: "anson", displayName: "Anson", password: "hello123", role: "MEMBER" },
	    { id: 2, username: "jack", displayName: "Jack", password: "hello124", role: "MEMBER" },
	    { id: 3, username: "adam", displayName: "Adam", password: "hellohello", role: "ADMIN" },
	    { id: 4, username: "tina", displayName: "Tina", password: "test123", role: "ENGINEER" },
	    { id: 5, username: "jason", displayName: "Jason", password: "hello123", role: "ADMIN" },
	    { id: 6, username: "henry", displayName: "Henry", password: "hello123", role: "ENGINEER" },
	    { id: 7, username: "marilyn", displayName: "Marilyn", password: "hello123", role: "ADMIN" },
    ];

    findAll() {
        return this.users
    }

    findOne(id: number) {
        const foundUser = this.users.find(user => user.id === id)
        return foundUser
    }

    create(user:{ username: string, displayName: string, password: string, role: "ADMIN"}) {
        const newUser = {
            id: this.users.length + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatUser: { username?: string, displayName?: string, password?: string}) {
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


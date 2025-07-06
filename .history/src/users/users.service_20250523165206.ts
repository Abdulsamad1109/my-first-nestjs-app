import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [
	    { id: 1, username: "anson", displayName: "Anson", password: "hello123" },
	    { id: 2, username: "jack", displayName: "Jack", password: "hello124" },
	    { id: 3, username: "adam", displayName: "Adam", password: "hellohello" },
	    { id: 4, username: "tina", displayName: "Tina", password: "test123" },
	    { id: 5, username: "jason", displayName: "Jason", password: "hello123" },
	    { id: 6, username: "henry", displayName: "Henry", password: "hello123" },
	    { id: 7, username: "marilyn", displayName: "Marilyn", password: "hello123" },
    ];

    findAll() {
        return this.users
    }

    findOne(id: number) {
        const foundUser = this.users.find(user => user.id === id)
        return foundUser
    }

    create(user:{ username: string, displayName: string, password: string}) {
        const newUser = {
            id: this.users.length + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    update(id: number, updatUser:{ username?: string, displayName?: string, password?: string}) {
        this.users = this.users.map(user => {})
        
    }

}

import { IsString } from "class-validator";


export class CreateUserDto{

    username: string;


    email: string;


    password: string;


    role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

}
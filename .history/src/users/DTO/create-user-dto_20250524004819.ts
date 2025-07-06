import { IsString, isEmail, isEnum } from "class-validator";


export class CreateUserDto{

    username: string;


    email: string;


    password: string;

    isE
    role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

}
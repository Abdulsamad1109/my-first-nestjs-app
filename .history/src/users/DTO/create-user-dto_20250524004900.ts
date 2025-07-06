import { IsString, isEmail, isEnum, isString } from "class-validator";


export class CreateUserDto{
    @isString()
    username: string;

    isEm
    email: string;


    password: string;

    
    role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

}
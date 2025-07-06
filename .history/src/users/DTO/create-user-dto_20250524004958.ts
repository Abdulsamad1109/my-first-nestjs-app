import { IsString, isEmail, isEnum, isString } from "class-validator";


export class CreateUserDto{
    // @isString()
    username: string;

    @I
    email: string;


    password: string;

    
    role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

}
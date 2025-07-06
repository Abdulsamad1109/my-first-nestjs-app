import { IsString, isEmail, isEnum, isString } from "class-validator";


export class CreateUserDto{
    // @isString()
    username: string;

    @isEmail()
    email: string;


    password: string;

    @isEnum(['ADMIN' | "ENGINEER" | 'MEMBER' ])
    role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

}
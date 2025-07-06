import { IsString, isEmail, isEnum } from "class-validator";


export class CreateUserDto{
    @is
    username: string;


    email: string;


    password: string;

    
    role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

}
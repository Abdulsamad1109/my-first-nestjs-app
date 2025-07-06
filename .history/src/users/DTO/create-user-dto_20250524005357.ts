import { IsString, isEmail, isEnum, isString } from "class-validator";


export class CreateUserDto{
    @isString()
    username: string;

    @isEmail()
    email: string;

    @IsString()
    password: string;

    @isEnum(['ADMIN', "ENGINEER", 'MEMBER' ], {
        message: 'valid role required'
    })
    role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

}
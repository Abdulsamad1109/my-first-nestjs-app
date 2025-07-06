    import { IsString, isEmail, isEnum, isNotEmpty, isString } from "class-validator";


    export class CreateUserDto{
        @IsString()
        @IsNotEmpty()
        username: string;

        @IsEmail()
        email: string;

        @IsString()
        password: string;

        @IsEnum(['ADMIN', "ENGINEER", 'MEMBER'], {
            message: 'valid role required'
        })
        role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

    }
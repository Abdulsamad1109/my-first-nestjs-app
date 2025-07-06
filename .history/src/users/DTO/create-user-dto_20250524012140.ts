    import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";


    export class CreateUserDto{
        @IsString()
        @IsNotEmpty()
        username: string;

        @IsEmail()
        email: string;

        @IsString()
        @Is
        password: string;

        @IsEnum(['ADMIN', "ENGINEER", 'MEMBER'], {
            message: 'valid role required'
        })
        role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

    }
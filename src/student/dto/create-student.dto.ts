import { ArrayNotEmpty, IsArray, IsEmail, IsEnum, IsNotEmpty, IsString, } from "class-validator";
import { Role } from "src/auth/roles.enum";


    export class CreateStudentDto{
        @IsString()
        @IsNotEmpty()
        firstName: string;

        @IsString()
        @IsNotEmpty()
        lastName: string;

        @IsEmail()
        email: string;
        
        @IsString()
        @IsNotEmpty()
        password: string; 

        @IsArray()
        @ArrayNotEmpty()
        @IsEnum(Role, { each: true })
        @IsNotEmpty()
        roles: Role[]

    }
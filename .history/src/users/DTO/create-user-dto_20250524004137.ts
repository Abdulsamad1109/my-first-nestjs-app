export class CreateUserDto{

    username: string;

    email: string;
    
    password: string;
    role: 'ADMIN' | "ENGINEER" | 'MEMBER' 

}
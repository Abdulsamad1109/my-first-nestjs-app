import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { StudentService } from 'src/student/student.service';
import { CreateSigninDto } from './dto/create-signin.dto';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';




@Injectable()
export class AuthService {

    constructor(

        private studentService: StudentService,
        private jwtService: JwtService
        
    ) {}

    async signin(signinDto: CreateSigninDto): Promise<{ accessToken: string }>{

    const user = await this.studentService.findOneByEmail({ email: signinDto.email })
    if(!user) throw new NotFoundException('user not found')

    const isPassword = await bcrypt.compare(signinDto.password, user.password)

    if(isPassword) {

        const payload = { email: user.email, sub: user.id, roles: user.roles }
        return { accessToken: this.jwtService.sign(payload) }

    }else{

        throw new UnauthorizedException('password does not match')

    }

    }

}

import { Controller, Get, Post, Body, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateSigninDto } from './dto/create-signin.dto';
import { CreateStudentDto } from 'src/student/dto/create-student.dto';
import { StudentService } from 'src/student/student.service';
import * as bcrypt from 'bcryptjs'
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly studentService: StudentService,
    private readonly authService: AuthService
  ) {}

  @Post('signup')
  signup(@Body() studentDto: CreateStudentDto) {
    return this.studentService.create(studentDto)
  }

  @Post('signin')
  async signin(@Body() signinDto: CreateSigninDto) {
    return this.authService.signin(signinDto)
  }
}

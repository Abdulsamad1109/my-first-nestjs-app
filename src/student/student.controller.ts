import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, Request } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from 'src/auth/roles.enum';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('signup')
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentService.create(createStudentDto);
  }

  
  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile( @Request() req){
    return req.user
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.studentService.findOne(id);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
  }

  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.studentService.remove(id);
  }


}

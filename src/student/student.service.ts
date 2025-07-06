import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs'

@Injectable()
export class StudentService {

  
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>) {}

  async create(studentDto: CreateStudentDto): Promise<Student> {
    studentDto.password = await bcrypt.hash(studentDto.password, 10);
    const student = await this.studentRepository.save(studentDto);
    return student;
  }

   async findAll(): Promise<Student[]> {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    let user = await this.studentRepository.findOneBy({id});
    if(!user) throw new NotFoundException('user not found')

    return user
  }

  async findOneByEmail(data: Partial<Student>) {
    const user = this.studentRepository.findOneBy({email: data.email})
    if(!user) throw new NotFoundException("email not exist")

    return user
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return await this.studentRepository.update(id, updateStudentDto);
  }

   async remove(id: number) {
    let user = await this.studentRepository.findOneBy({id})

    if(!user) throw new NotFoundException(`user with id ${id} not found`)

    await this.studentRepository.delete(user.id);

    return `User with ID ${id} deleted successfully`
  }
}

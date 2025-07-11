import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { CreateStaffDto } from './dto/create-staff.dto';
// import { UpdateStaffDto } from './dto/update-staff.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Staff } from './entities/staff.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StaffService {

  constructor(
    @InjectRepository(Staff)
    private staffRepo: Repository<Staff>
  ){}

  
}

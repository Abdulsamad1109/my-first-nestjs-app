import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imp
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

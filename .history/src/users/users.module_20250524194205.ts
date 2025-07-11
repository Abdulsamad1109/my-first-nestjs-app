import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {UsersModule} from './'

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule,],
  controllers: [AppController, C],
  providers: [AppService],
})
export class AppModule {}

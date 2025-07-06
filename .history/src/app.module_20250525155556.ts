import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [UsersModule,],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService, HelloService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { MongooseModule } from '@nestjs/mongoose';
import config from /

@Module({
  imports: [UsersModule, MongooseModule.forRoot()],
  controllers: [AppController, CatsController, HelloController],
  providers: [AppService, CatsService, HelloService],
})
export class AppModule {}

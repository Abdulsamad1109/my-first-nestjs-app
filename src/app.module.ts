import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';
import { StaffModule } from './staff/staff.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, }),

    // mongoose configuration
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) =>({
        uri: config.get<string>("MONGO_URI")
      })
    }),

    // typeORM configuration
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USERNAME'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [Student],
        synchronize: true,
      })
    }),
    // UsersModule,
    AuthModule,
    StudentModule,
    StaffModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private datasource: DataSource) {console.log(datasource.driver.database);
  }
  
}

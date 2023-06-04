import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // type of our database
      host: 'localhost', // database host
      port: 5431, // database host
      username: 'postgres', // username
      password: 'pass456', // user password
      database: 'postgres', // name of our database,
      autoLoadEntities: true, // models will be loaded automatically 
      synchronize: true, // your entities will be synced with the database(recommended: disable in prod)
      // type: 'postgres',
      // host: process.env.DATABASE_HOST,
      // port: +process.env.DATABASE_PORT,
      // username: process.env.DATABASE_USER,
      // password: process.env.DATABASE_PASSWORD,
      // database: process.env.DATABASE_NAME,
      // autoLoadEntities: true,
      // synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
config();

@Module({
  imports: [UsersModule, MongooseModule.forRoot(process.env.DB_CONNECTION)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

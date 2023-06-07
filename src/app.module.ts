import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { AuthModule } from './auth/auth.module';
config();

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(process.env.DB_CONNECTION),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

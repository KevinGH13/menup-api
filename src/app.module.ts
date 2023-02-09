/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TestModule,
    MongooseModule.forRoot('mongodb+srv://Kev:root@menupdb.6c0l8.mongodb.net/db_menup?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

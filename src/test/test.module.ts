/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestController } from './test.controller';
import { MongooseModule } from '@nestjs/mongoose'
import { testSchema } from './schemas/test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Test', schema: testSchema }
    ])
  ],
  providers: [TestService],
  controllers: [TestController]
})
export class TestModule { }

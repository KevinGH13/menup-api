/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';
import { Test } from './interfaces/test.interface';
import { CreateTestDto } from './dto/test.dto';

@Injectable()
export class TestService {

    constructor(@InjectModel('Test') private readonly testModel: Model<Test>) { }

    async getTest(): Promise<Test[]> {
        return await this.testModel.find();
    }

    async getTestById(testId: string): Promise<Test> {
        return await this.testModel.findById(testId);
    }

    async postTest(createTestDto: CreateTestDto): Promise<Test> {
        const test = new this.testModel(createTestDto);
        return await test.save();
    }

    async deleteTest(testId: string): Promise<Test> {
        return await this.testModel.findByIdAndDelete(testId)
    }

    // async updateTest(testId: string, createTestDto: CreateTestDto): Promise<Test> {
    //     return await this.testModel.findByIdAndUpdate(testId, createTestDto, { new: true });
    // }
}

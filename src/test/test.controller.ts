/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateTestDto } from './dto/test.dto';
import { TestService } from './test.service';

@Controller('test')
export class TestController {

    constructor(private testService: TestService) { }

    @Post('/create')
    async create(@Res() res, @Body() createTestDto: CreateTestDto) {
        const test = await this.testService.postTest(createTestDto)
        res.status(HttpStatus.OK).json({
            message: 'test created',
            data: test
        });
    }

    @Get('/tests')
    async getTest(@Res() res) {
        const test = await this.testService.getTest();
        res.status(HttpStatus.OK).json({
            message: 'returned data',
            data: test
        })
    }

    @Get('/tests/:testId')
    async getTestById(@Res() res, @Param('testId') testId) {
        const test = await this.testService.getTestById(testId)
        if (!test) throw new NotFoundException('test does not exist')
        res.status(HttpStatus.OK).json({
            message: 'returned data',
            data: test
        })
    }

    @Delete('/delete/:testId')
    async deleteTest(@Res() res, @Param('testId') testId) {
        const test = await this.testService.deleteTest(testId);
        res.status(HttpStatus.OK).json({
            message: 'data deleted',
            data: test
        })
    }

}

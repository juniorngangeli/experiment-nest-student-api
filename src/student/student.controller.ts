import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentDto,
  UpdateStudentDto,
  StudentDto,
} from './dto/student.dto';
@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentDto[] {
    return [];
  }

  @Get(':studentId')
  getStudentById(@Param('studentId') studentId: string): FindStudentDto {
    return null;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentDto {
    return null;
  }

  @Put(':studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentDto {
    return null;
  }
}

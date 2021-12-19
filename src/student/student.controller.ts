import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentDto,
  UpdateStudentDto,
  StudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): FindStudentDto[] {
    return this.studentService.getStudents();
  }

  @Get(':studentId')
  getStudentById(@Param('studentId') studentId: string): FindStudentDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentDto {
    return this.studentService.createStudent(body);
  }

  @Put(':studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentDto {
    return this.studentService.updateStudent(body, studentId);
  }
}

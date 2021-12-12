import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'All students';
  }

  @Get(':studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `get student with id of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    return `Create a new student with the following data : ${JSON.stringify(
      body,
    )}`;
  }

  @Put(':studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Update student with id of ${studentId} using the following data : ${JSON.stringify(
      body,
    )}`;
  }
}

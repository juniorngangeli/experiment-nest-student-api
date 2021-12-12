import { Body, Controller, Get, Param, Put } from '@nestjs/common';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get('/')
  getTeacherStudents() {
    return 'teacher students';
  }

  @Put('/:studentsId')
  updateTeacherStudent(@Param() { studentId, teacherId }, @Body() body) {
    return `update teacher with ID ${teacherId} students (${studentId}) using the following data : ${JSON.stringify(
      body,
    )}`;
  }
}

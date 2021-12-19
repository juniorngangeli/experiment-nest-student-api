import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentDto, StudentDto } from 'src/student/dto/student.dto';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  @Get('/')
  getTeacherStudents(): FindStudentDto[] {
    return [];
  }

  @Put('/:studentsId')
  updateTeacherStudent(
    @Param() { studentId, teacherId },
    @Body() body,
  ): StudentDto {
    return null;
  }
}

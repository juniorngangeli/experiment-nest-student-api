import { Controller, Get, Param, Put } from '@nestjs/common';
import { FindStudentDto, StudentDto } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get('/')
  getTeacherStudents(@Param('teacherId') teacherId: string): FindStudentDto[] {
    return this.studentService.getStudentsByTeacherID(teacherId);
  }

  @Put('/:studentsId')
  updateTeacherStudent(@Param() { studentId, teacherId }): StudentDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}

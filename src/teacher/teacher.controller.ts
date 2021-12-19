import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherDto } from './dto/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherDto[] {
    return [];
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string): FindTeacherDto {
    return null;
  }
}

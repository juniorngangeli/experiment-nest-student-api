import { Controller, Get, Param } from '@nestjs/common';
import { FindTeacherDto } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): FindTeacherDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(@Param('teacherId') teacherId: string): FindTeacherDto {
    return this.teacherService.getTeacherById(teacherId);
  }
}

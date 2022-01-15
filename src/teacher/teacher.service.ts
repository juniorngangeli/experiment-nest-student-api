import { Injectable } from '@nestjs/common';
import { teachers } from '../db';
import { FindTeacherDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;
  getTeachers(): FindTeacherDto[] {
    return this.teachers;
  }

  getTeacherById(teacher_id: string): FindTeacherDto {
    return this.teachers.find((teacher) => teacher.id === teacher_id);
  }
}

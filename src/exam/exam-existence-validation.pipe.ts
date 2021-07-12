import { ExamService } from './exam.service'
import { Injectable, PipeTransform, BadRequestException } from '@nestjs/common'

@Injectable()
export class ExamExistenceValidationPipe implements PipeTransform {
  constructor(private readonly examService: ExamService) {}
  async transform(value: { examId: number }) {
    if (!(await this.examService.exists(value.examId))) {
      throw new BadRequestException('Exam ID is not correct')
    }
    return value
  }
}

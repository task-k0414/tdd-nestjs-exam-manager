import { Body, Controller, Post } from '@nestjs/common'
import { ExamExistenceValidationPipe } from '../exam'
import { UserExistenceValidationPipe } from '../user'
import { SaveExamResultRequest } from './dto'
import { ExamResult, ExamResultService } from './exam-result.service'

export type ISaveExamResultRequest = ExamResult

@Controller('exam-result')
export class ExamResultController {
  constructor(private readonly examResultService: ExamResultService) {}

  @Post()
  save(
    @Body(UserExistenceValidationPipe, ExamExistenceValidationPipe)
    examResult: SaveExamResultRequest,
  ) {
    this.examResultService.save(examResult)
  }
}

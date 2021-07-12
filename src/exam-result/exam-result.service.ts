import { Injectable } from '@nestjs/common'

export interface ExamResult {
  userId: number
  examId: number
  score: number
}

@Injectable()
export class ExamResultService {
  save(data: ExamResult) {
    throw new Error('Have not implemented')
  }
}

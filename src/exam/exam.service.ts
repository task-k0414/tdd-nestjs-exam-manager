import { Injectable } from '@nestjs/common'

@Injectable()
export class ExamService {
  async exists(examId: number): Promise<boolean> {
    return examId === 1
  }
}

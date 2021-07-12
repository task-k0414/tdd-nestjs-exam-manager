import { Test, TestingModule } from '@nestjs/testing'
import {
  ExamResultController,
  ISaveExamResultRequest,
} from './exam-result.controller'
import { ExamResultService } from './exam-result.service'
jest.mock('./exam-result.service')
jest.mock('../user')
jest.mock('../exam')

describe('ExamResultController', () => {
  let controller: ExamResultController
  let examResultService: ExamResultService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExamResultController],
      providers: [ExamResultService],
    }).compile()

    controller = module.get<ExamResultController>(ExamResultController)
    examResultService = module.get<ExamResultService>(ExamResultService)
  })

  it('should call the save function', () => {
    const examResult: ISaveExamResultRequest = {
      userId: 1,
      examId: 1,
      score: 100,
    }
    controller.save(examResult)
    expect(examResultService.save).toHaveBeenCalledWith(examResult)
  })
})

import { ExamService } from './exam.service'
import { ExamExistenceValidationPipe } from './exam-existence-validation.pipe'
jest.mock('./exam.service')

describe('UserExistenceValidationPipe', () => {
  let examExistenceValidationPipe: ExamExistenceValidationPipe
  let examService: ExamService

  beforeEach(() => {
    examService = new ExamService()
    examExistenceValidationPipe = new ExamExistenceValidationPipe(examService)
  })
  it('should be defined', () => {
    expect(examExistenceValidationPipe).toBeDefined()
  })

  it('should throw validation error', () => {
    expect.assertions(1)
    jest.spyOn(examService, 'exists').mockResolvedValue(false)

    return expect(
      examExistenceValidationPipe.transform({ examId: 99 }),
    ).rejects.toThrowError()
  })

  it('should return validated object', () => {
    expect.assertions(1)
    jest.spyOn(examService, 'exists').mockResolvedValue(true)
    const payload = { examId: 99, anotherProperty: 'another property' }
    return expect(
      examExistenceValidationPipe.transform(payload),
    ).resolves.toEqual(payload)
  })
})

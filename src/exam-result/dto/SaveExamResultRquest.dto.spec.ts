import { SaveExamResultRequest } from './SaveExamResultRequest.dto'

describe('SaveExamResultRequest', () => {
  it('should return errors when all fields are empty', async () => {
    const errors = await SaveExamResultRequest.validate({})
    expect(errors).toHaveLength(3)
  })

  it('should return errors when all fields are string', async () => {
    const errors = await SaveExamResultRequest.validate({
      userId: 'user1',
      examId: 'exam1',
      score: 'scoreless',
    })
    expect(errors).toHaveLength(3)
  })

  it('should return an error when score is more than maximum value', async () => {
    const errors = await SaveExamResultRequest.validate({
      userId: 1,
      examId: 1,
      score: 120,
    })
    expect(errors).toHaveLength(1)
  })

  it('should return an error when score is less than minimum value', async () => {
    const errors = await SaveExamResultRequest.validate({
      userId: 1,
      examId: 1,
      score: -1,
    })
    expect(errors).toHaveLength(1)
  })
})

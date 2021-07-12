import { UserExistenceValidationPipe } from './user-existence-validation.pipe'
import { UserService } from './user.service'
jest.mock('./user.service')

describe('UserExistenceValidationPipe', () => {
  let userExistenceValidationPipe: UserExistenceValidationPipe
  let userService: UserService

  beforeEach(() => {
    userService = new UserService()
    userExistenceValidationPipe = new UserExistenceValidationPipe(userService)
  })
  it('should be defined', () => {
    expect(userExistenceValidationPipe).toBeDefined()
  })

  it('should throw validation error', () => {
    expect.assertions(1)
    jest.spyOn(userService, 'exists').mockResolvedValue(false)

    return expect(
      userExistenceValidationPipe.transform({ userId: 99 }),
    ).rejects.toThrowError()
  })

  it('should return validated object', () => {
    expect.assertions(1)
    jest.spyOn(userService, 'exists').mockResolvedValue(true)
    const payload = { userId: 99, anotherProperty: 'another property' }
    return expect(
      userExistenceValidationPipe.transform(payload),
    ).resolves.toEqual(payload)
  })
})

import { Exclude, Expose } from 'class-transformer'
import { IsNotEmpty, IsNumber, Max, Min, validate } from 'class-validator'
import { ISaveExamResultRequest } from '../exam-result.controller'

@Exclude()
export class SaveExamResultRequest implements ISaveExamResultRequest {
  @Expose()
  @IsNumber()
  @IsNotEmpty()
  userId: number

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  examId: number

  @Expose()
  @IsNumber()
  @IsNotEmpty()
  @Max(100)
  @Min(0)
  score: number

  constructor(obj: Record<string, unknown> = {}) {
    Object.assign(this, obj)
  }

  static validate(obj: Record<string, unknown> = {}) {
    return validate(new SaveExamResultRequest(obj))
  }
}

import { Module } from '@nestjs/common'
import { ExamResultController } from './exam-result.controller'
import { ExamResultService } from './exam-result.service'
import { UserModule } from '../user/user.module'

@Module({
  imports: [UserModule],
  controllers: [ExamResultController],
  providers: [ExamResultService],
})
export class ExamResultModule {}

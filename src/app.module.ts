import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module';
import { ExamResultModule } from './exam-result/exam-result.module';
import { ExamService } from './exam/exam.service';

@Module({
  imports: [UserModule, ExamResultModule],
  controllers: [AppController],
  providers: [AppService, ExamService],
})
export class AppModule {}

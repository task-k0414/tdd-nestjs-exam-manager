import { UserService } from './user.service'
import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common'

@Injectable()
export class UserExistenceValidationPipe implements PipeTransform {
  constructor(private readonly userService: UserService) {}

  async transform(value: { userId: number }) {
    if (!(await this.userService.exists(value.userId))) {
      throw new BadRequestException('User ID is not correct')
    }
    return value
  }
}

import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  async exists(userId: number): Promise<boolean> {
    return userId === 1
  }
}

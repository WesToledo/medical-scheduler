import { Injectable } from '@nestjs/common';
import { UserService } from 'src/common/modules/user/user.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validadeUser(username: string, password: string) {
    const user = await this.userService.findOneWithUsername(username);

    if (user && bcrypt.compare(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}

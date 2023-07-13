import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

  //user /pass là 2 tham số thư viện pasport trả về
  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if(user){
      const isValid = this.usersService.isValidPassword(pass, user.password)
      if(isValid === true){
        return user;
      }
    }
    return null;
  }
}

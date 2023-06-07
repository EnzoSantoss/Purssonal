import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';
config();

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async singIn(nickName: string, pass: string) {
    const user = await this.userService.findByNickName(nickName);

    if (user.passWord !== pass) {
      throw new UnauthorizedException('Senha ou nick invalido sla porrakkkk');
    }

    const payload = { sub: user.id, nickName: user.nickName };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

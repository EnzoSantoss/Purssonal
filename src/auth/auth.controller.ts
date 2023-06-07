import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async singIn(@Body() singInDto: { nickName: string; pass: string }) {
    return this.authService.singIn(singInDto.nickName, singInDto.pass);
  }
}

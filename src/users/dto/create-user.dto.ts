import { IsString, IsEmail, MinLength, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  nickName: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  passWord: string;

  @IsDateString()
  birthDate: string;
}

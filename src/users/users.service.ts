import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as moment from 'moment';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);

    return await newUser.save();
  }

  async findAll() {
    return await this.userModel.find();
  }

  findById(param: string) {
    return 'ok';
  }

  async findByNickName(nickName: string): Promise<User> {
    return await this.userModel.findOne({ nickName });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

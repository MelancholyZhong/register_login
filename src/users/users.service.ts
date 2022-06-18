import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { User, UserDocument } from '../schemas/user.schema';

// This should be a real class/interface representing a user entity
// export type User = {
//   userId: number;
//   username: string;
//   password: string;
// };

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModal: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.userModal.create(createUserDto);
    return createdUser;
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.userModal.findOne({ username: username }).exec();
  }
}

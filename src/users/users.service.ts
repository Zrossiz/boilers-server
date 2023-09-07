import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel: typeof User) {}

  findOne(filter: {
    where: { id?: string; username?: string; email?: string };
  }): Promise<User> {
    return this.userModel.findOne({ ...filter });
  }

  async create(
    createUserDto: CreateUserDto,
  ): Promise<User | { warningMessage: string }> {
    try {
      const user = new User();
      const exisistingByUsername = await this.findOne({
        where: { username: createUserDto.username },
      });
      const exisistingByEmail = await this.findOne({
        where: { email: createUserDto.email },
      });

      if (exisistingByUsername) {
        return { warningMessage: 'Пользователь с таким именем уже существует' };
      }

      if (exisistingByEmail) {
        return {
          warningMessage: 'Пользователь с такой почтой уже существует',
        };
      }

      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      user.username = createUserDto.username;
      user.password = hashedPassword;
      user.email = createUserDto.email;

      return user.save();
    } catch (err) {
      console.log(err);
    }
  }
}

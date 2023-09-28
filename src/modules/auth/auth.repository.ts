import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto, SignUpDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
// auth.repository.ts
@Injectable()
export class AuthRepository extends Repository<User> {
  constructor(
    private dataSource: DataSource,
    private jwtService: JwtService,
  ) {
    super(User, dataSource.createEntityManager());
  }

  async signUp(signUpDto: SignUpDto) {
    try {
      /**
       * Check whether the username exists
       * if yes throw error
       * if not
       * hash the pass
       * create payload
       * create new user
       * return the user
       */

      const { username, password, role_id } = signUpDto;

      const isUserNameExists = await this.findOne({ where: { username } });

      if (isUserNameExists?.username) {
        throw new BadRequestException('This user already exists.');
      }
      const saltOrRounds = 10;
      const salt = await bcrypt.genSalt(saltOrRounds);
      const hash = await bcrypt.hash(password, salt);

      const newUser = new User();
      newUser.username = username;
      newUser.password = hash;
      newUser.salt = salt;
      newUser.roleId = role_id;

      await newUser.save();

      return {
        message: 'User created successfully. You can login now',
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async login(loginDto: LoginDto) {
    try {
      /**
       * check username record exists or not
       * if not return user not found error
       * if exists check passwrod against salt
       * if mateched create jwt and return the user
       * if not return invalid password error
       */
      const { username, password } = loginDto;
      const isUserNameExists = await this.findOne({
        where: { username },
        relations: ['role'],
      });

      if (!isUserNameExists?.username) {
        throw new NotFoundException('User does not exists.');
      }

      const isMatch = await bcrypt.compare(password, isUserNameExists.password);

      if (!isMatch) {
        throw new UnauthorizedException(
          'Invalid password. Please enter valid password',
        );
      }

      return {
        message: 'User Login successfully',
        access_token: this.jwtService.sign(
          JSON.parse(JSON.stringify(isUserNameExists)),
        ),
      };
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}

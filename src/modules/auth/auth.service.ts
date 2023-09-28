import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthRepository)
    private authRepository: AuthRepository,
  ) {}

  async signUp(signUpDto) {
    return this.authRepository.signUp(signUpDto);
  }

  async login(loginDto) {
    return this.authRepository.login(loginDto);
  }
}

import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthRepository } from './auth.repository';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'onedotcom',
      signOptions: { expiresIn: '6000000s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthRepository],
})
export class AuthModule {}

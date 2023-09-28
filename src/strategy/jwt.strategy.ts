import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  //secret should come from env in actual project. for demo purpose i have put it statically
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'onedotcom',
    });
  }

  async validate(payload) {
    if (!payload?.username) {
      throw new UnauthorizedException('Please login to continue.');
    }
    return payload;
  }
}

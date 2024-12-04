import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from '@superfaceai/passport-twitter-oauth2';
import { AuthConst } from './auth.constant';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor() {
    super({
      clientID: AuthConst.TWITTER_CLIENT_ID,
      clientSecret: AuthConst.TWITTER_CLIENT_SECRET,
      callbackURL: AuthConst.TWITTER_CALLBACK_URL,
      clientType: 'confidential',
      scope: ['tweet.read', 'users.read', 'offline.access'],
      includeEmail: true
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any): Promise<any> {
    const user = {
      profile: profile,
    };
    return user;
  }
}
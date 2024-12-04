import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from '@superfaceai/passport-twitter-oauth2';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor() {
    super({
      clientID: `${process.env.TWITTER_CLIENT_ID}.env`,
      clientSecret: `${process.env.TWITTER_CLIENT_SECRET}.env`,
      callbackURL: `${process.env.TWITTER_CALLBACK_URL}.env`,
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
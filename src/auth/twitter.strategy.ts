import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from '@superfaceai/passport-twitter-oauth2';

@Injectable()
export class TwitterStrategy extends PassportStrategy(Strategy, 'twitter') {
  constructor() {
    console.log( `${process.env.TWITTER_CLIENT_ID}`,
       `${process.env.TWITTER_CLIENT_SECRET}`,
       `${process.env.TWITTER_CALLBACK_URL}`,);
    super({
      clientID: `${process.env.TWITTER_CLIENT_ID}`,
      clientSecret: `${process.env.TWITTER_CLIENT_SECRET}`,
      callbackURL: `${process.env.TWITTER_CALLBACK_URL}`,
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
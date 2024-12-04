import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {

  @Get("/twitter")
  @UseGuards(AuthGuard('twitter'))
  async twitterCallBack(@Req() req) {
  	return req.user;
  }
}

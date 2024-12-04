import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth.controller';

import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { AuthConst } from './auth.constant';
import { TwitterStrategy } from './twitter.strategy';
@Module({
    imports: [
        JwtModule.register({
          secret: AuthConst.JWT_SECRET,
          signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [JwtStrategy, TwitterStrategy],
    
})
export class AuthModule{}

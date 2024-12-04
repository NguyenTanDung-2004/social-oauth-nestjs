import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthController } from './auth.controller';

import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { TwitterStrategy } from './twitter.strategy';
import { ConfigModule } from '@nestjs/config';
@Module({
    imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
          secret: `${process.env.NODE_ENV}.env}`,
          signOptions: { expiresIn: '1h' },
        },
      ),
    ],
    controllers: [AuthController],
    providers: [JwtStrategy, TwitterStrategy,],
    
})
export class AuthModule{}

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as passport from 'passport';
import * as session from 'express-session';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initialize express-session middleware
  app.use(
    session({
      secret: 'keyboard cat', // Use a strong secret in production
      resave: false,
      saveUninitialized: true,
    }),
  );

  // Initialize Passport middleware
  app.use(passport.initialize()); // Initializes Passport
  app.use(passport.session());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

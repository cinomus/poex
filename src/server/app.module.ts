import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import Next from 'next';
import { RenderModule } from 'nest-next';
import config from 'config';
import { UsersModule } from './models/users/users.module';
import { RolesModule } from './models/roles/roles.module';
import { AuthModule } from './authentication/auth.module';
import { AuthController } from './authentication/auth.controller';
import { UsersController } from './models/users/users.controller';

@Module({
  imports: [
    MongooseModule.forRoot(config.get('MONGO_URL')),
    RenderModule.forRootAsync(Next({ dev: true }), {
      passthrough404: true,
      viewsDir: null,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}

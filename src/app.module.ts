import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyApi } from './my-api';

@Module({
  imports: [],
  controllers: [AppController,MyApi],
  providers: [AppService, MyApi],
})
export class AppModule {}

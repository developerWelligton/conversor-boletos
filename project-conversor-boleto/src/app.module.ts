import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConversorModule } from './customers/conversor.module';

@Module({
  imports: [ConversorModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

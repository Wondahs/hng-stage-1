import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NumbersModule } from './numbers/numbers.module';

@Module({
  imports: [NumbersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

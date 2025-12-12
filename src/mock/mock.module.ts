import { Module } from '@nestjs/common';
import { MockController } from './mock.controller';
import { ApiKeyGuard } from './guards/api-key.guard';

@Module({
  controllers: [MockController],
  providers: [ApiKeyGuard],
})
export class MockModule {}



import { Module } from '@nestjs/common';
import { MockController } from './mock.controller';
import { VersionController } from './version.controller';

@Module({
  controllers: [MockController, VersionController],
})
export class MockModule {}



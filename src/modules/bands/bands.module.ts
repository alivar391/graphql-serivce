import { Module } from '@nestjs/common';
import { BandsResolver } from './resolvers/bands.resolver';
import { BandsService } from './services/bands.service';

@Module({
  providers: [BandsResolver, BandsService],
})
export class BandsModule {}

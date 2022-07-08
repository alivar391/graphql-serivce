import { Module } from '@nestjs/common';
import { BandsResolver } from './resolvers/bands.resolver';
import { BandsService } from './services/bands.service';
import { GenresService } from '../genres/services/genres.service';

@Module({
  providers: [BandsResolver, BandsService, GenresService],
})
export class BandsModule {}

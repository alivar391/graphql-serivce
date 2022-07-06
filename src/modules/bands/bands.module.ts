import { Module } from '@nestjs/common';
import { BandsResolver } from './resolvers/bands.resolver';
import { BandsService } from './services/bands.service';
import { GenresResolver } from '../genres/resolvers/genres.resolver';
import { GenresService } from '../genres/services/genres.service';
import { GenresModule } from '../genres/genres.module';

@Module({
  imports: [GenresModule],
  providers: [BandsResolver, BandsService, GenresResolver, GenresService],
})
export class BandsModule {}

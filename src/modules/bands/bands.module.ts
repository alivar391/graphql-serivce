import { Module } from '@nestjs/common';
import { BandsResolver } from './resolvers/bands.resolver';
import { BandsService } from './services/bands.service';
import { GenresService } from '../genres/services/genres.service';
import { ArtistsService } from '../artists/services/artists.service';

@Module({
  providers: [BandsResolver, BandsService, GenresService, ArtistsService],
})
export class BandsModule {}

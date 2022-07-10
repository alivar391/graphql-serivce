import { Module } from '@nestjs/common';
import { BandsService } from '../bands/services/bands.service';
import { ArtistsResolver } from './resolvers/artists.resolver';
import { ArtistsService } from './services/artists.service';

@Module({
  providers: [ArtistsResolver, ArtistsService, BandsService],
})
export class ArtistsModule {}

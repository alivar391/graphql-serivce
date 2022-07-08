import { Module } from '@nestjs/common';
import { AlbumsService } from '../albums/services/albums.service';
import { ArtistsService } from '../artists/services/artists.service';
import { BandsService } from '../bands/services/bands.service';
import { GenresService } from '../genres/services/genres.service';
import { TracksResolver } from './resolvers/tracks.resolver';
import { TracksService } from './services/tracks.service';

@Module({
  providers: [
    TracksResolver,
    TracksService,
    BandsService,
    GenresService,
    ArtistsService,
    AlbumsService,
  ],
})
export class TracksModule {}

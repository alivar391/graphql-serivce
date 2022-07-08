import { Module } from '@nestjs/common';
import { ArtistsService } from '../artists/services/artists.service';
import { BandsService } from '../bands/services/bands.service';
import { GenresService } from '../genres/services/genres.service';
import { TracksService } from '../tracks/services/tracks.service';
import { AlbumsResolver } from './resolvers/albums.resolver';
import { AlbumsService } from './services/albums.service';

@Module({
  providers: [
    AlbumsResolver,
    AlbumsService,
    TracksService,
    BandsService,
    GenresService,
    ArtistsService,
  ],
})
export class AlbumsModule {}

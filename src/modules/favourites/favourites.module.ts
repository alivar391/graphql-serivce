import { Module } from '@nestjs/common';
import { ArtistsService } from '../artists/services/artists.service';
import { BandsService } from '../bands/services/bands.service';
import { GenresService } from '../genres/services/genres.service';
import { TracksService } from '../tracks/services/tracks.service';
import { FavouritesResolver } from './resolvers/favourites.resolver';
import { FavouritesService } from './services/favourites.service';

@Module({
  providers: [
    FavouritesResolver,
    FavouritesService,
    TracksService,
    BandsService,
    GenresService,
    ArtistsService,
  ],
})
export class FavouritesModule {}

import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AddFavourites } from 'src/graphql';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';
import { FavouritesService } from '../services/favourites.service';

@Resolver('Favourites')
export class FavouritesResolver {
  constructor(
    private readonly favouritesService: FavouritesService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
  ) {}

  @Query('favourites')
  favourites(@Context('token') token: string) {
    return this.favouritesService.getFavourites(token);
  }

  @ResolveField()
  genres(@Parent() favourites) {
    const { genresIds } = favourites;
    return genresIds.map(async (genreId) => {
      return this.genresService.getGenre(genreId);
    });
  }

  @ResolveField()
  bands(@Parent() favourites) {
    const { bandsIds } = favourites;
    return bandsIds.map(async (bandId) => {
      return this.bandsService.getBand(bandId);
    });
  }

  @ResolveField()
  artists(@Parent() favourites) {
    const { artistsIds } = favourites;
    return artistsIds.map(async (artistId) => {
      return this.artistsService.getArtist(artistId);
    });
  }

  @ResolveField()
  tracks(@Parent() favourites) {
    const { tracksIds } = favourites;
    return tracksIds.map(async (trackId) => {
      return this.tracksService.getTrack(trackId);
    });
  }

  @Mutation('addTrackToFavourites')
  addTrackToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return this.favouritesService.addTrack(id, token);
  }

  @Mutation('addBandToFavourites')
  addBandToFavourites(@Args('id') id: string, @Context('token') token: string) {
    return this.favouritesService.addBand(id, token);
  }

  @Mutation('addArtistToFavourites')
  addArtistToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return this.favouritesService.addArtist(id, token);
  }

  @Mutation('addGenreToFavourites')
  addGenreToFavourites(
    @Args('id') id: string,
    @Context('token') token: string,
  ) {
    return this.favouritesService.addGenre(id, token);
  }
}

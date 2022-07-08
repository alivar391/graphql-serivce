import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateTrack, UpdateTrack } from 'src/graphql';
import { AlbumsService } from 'src/modules/albums/services/albums.service';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from '../services/tracks.service';

@Resolver('Track')
export class TracksResolver {
  constructor(
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
    private readonly albumsService: AlbumsService,
  ) {}
  @Query('getTracks')
  getTracks(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.tracksService.getTracks(limit, offset);
  }

  @Query('getTrack')
  getTrack(@Args('id') id: string) {
    return this.tracksService.getTrack(id);
  }

  @ResolveField()
  album(@Parent() getTrack) {
    const { albumId } = getTrack;
    return this.albumsService.getAlbum(albumId);
  }

  @ResolveField()
  genres(@Parent() getTrack) {
    const { genresIds } = getTrack;
    return genresIds.map(async (genreId) => {
      return this.genresService.getGenre(genreId);
    });
  }

  @ResolveField()
  bands(@Parent() getTrack) {
    const { bandsIds } = getTrack;
    return bandsIds.map(async (bandId) => {
      return this.bandsService.getBand(bandId);
    });
  }

  @ResolveField()
  artists(@Parent() getTrack) {
    const { artistsIds } = getTrack;
    return artistsIds.map(async (artistId) => {
      return this.artistsService.getArtist(artistId);
    });
  }

  @Mutation('createTrack')
  createTrack(
    @Args('track') track: CreateTrack,
    @Context('token') token: string,
  ) {
    return this.tracksService.create(track, token);
  }

  @Mutation('deleteTrack')
  deleteTrack(@Args('id') id: string, @Context('token') token: string) {
    return this.tracksService.delete(id, token);
  }

  @Mutation('updateTrack')
  updateTrack(
    @Args('id') id: string,
    @Args('track') track: UpdateTrack,
    @Context('token') token: string,
  ) {
    return this.tracksService.update(id, track, token);
  }
}

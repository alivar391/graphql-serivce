import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateAlbum, UpdateAlbum } from 'src/graphql';
import { ArtistsService } from 'src/modules/artists/services/artists.service';
import { BandsService } from 'src/modules/bands/services/bands.service';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { TracksService } from 'src/modules/tracks/services/tracks.service';
import { AlbumsService } from '../services/albums.service';

@Resolver()
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService,
    private readonly tracksService: TracksService,
    private readonly bandsService: BandsService,
    private readonly genresService: GenresService,
    private readonly artistsService: ArtistsService,
  ) {}

  @Query('albums')
  albums(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.albumsService.getAlbums(limit, offset);
  }

  @Query('album')
  album(@Args('id') id: string) {
    return this.albumsService.getAlbum(id);
  }

  @ResolveField()
  genres(@Parent() album) {
    const { genresIds } = album;
    return genresIds.map(async (genreId) => {
      return this.genresService.getGenre(genreId);
    });
  }

  @ResolveField()
  bands(@Parent() album) {
    const { bandsIds } = album;
    return bandsIds.map(async (bandId) => {
      return this.bandsService.getBand(bandId);
    });
  }

  @ResolveField()
  artists(@Parent() album) {
    const { artistsIds } = album;
    return artistsIds.map(async (artistId) => {
      return this.artistsService.getArtist(artistId);
    });
  }

  @ResolveField()
  tracks(@Parent() album) {
    const { tracksIds } = album;
    return tracksIds.map(async (trackId) => {
      return this.tracksService.getTrack(trackId);
    });
  }

  @Mutation('createAlbum')
  createAlbum(
    @Args('album') album: CreateAlbum,
    @Context('token') token: string,
  ) {
    return this.albumsService.create(album, token);
  }

  @Mutation('deleteAlbum')
  deleteAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.delete(id, token);
  }

  @Mutation('updateAlbum')
  updateAlbum(
    @Args('id') id: string,
    @Args('album') album: UpdateAlbum,
    @Context('token') token: string,
  ) {
    return this.albumsService.update(id, album, token);
  }
}

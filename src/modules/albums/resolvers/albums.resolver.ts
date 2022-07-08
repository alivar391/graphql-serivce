import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateAlbum, UpdateAlbum, Album, Genre } from 'src/graphql';
import { GenresService } from 'src/modules/genres/services/genres.service';
import { AlbumResponse, AlbumsService } from '../services/albums.service';

@Resolver()
export class AlbumsResolver {
  constructor(
    private readonly albumsService: AlbumsService, // private readonly genresService: GenresService,
  ) {}

  @Query('getAlbums')
  getAlbums(@Args('limit') limit: number, @Args('offset') offset: number) {
    return this.albumsService.getAlbums(limit, offset);
  }

  @Query('getAlbum')
  getAlbum(@Args('id') id: string, @Context('token') token: string) {
    return this.albumsService.getAlbum(id, token);
  }

  // @ResolveField(() => [Genre])
  // genres(@Parent() album: AlbumResponse, @Context('token') token: string) {
  //   console.log('resolvefield');
  //   return album.genresIds.map((id) => this.genresService.getGenre(id, token));
  // }

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
